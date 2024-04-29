from collections import defaultdict
from project.campaigns.base_campaign import BaseCampaign
from project.campaigns.high_budget_campaign import HighBudgetCampaign
from project.campaigns.low_budget_campaign import LowBudgetCampaign
from project.influencers.base_influencer import BaseInfluencer
from project.influencers.premium_influencer import PremiumInfluencer
from project.influencers.standard_influencer import StandardInfluencer
from typing import List


class InfluencerManagerApp:
    VALID_INFLUENCER_TYPES = {
        'PremiumInfluencer': PremiumInfluencer,
        'StandardInfluencer': StandardInfluencer
    }

    VALID_CAMPAIGN_TYPES = {
        'HighBudgetCampaign': HighBudgetCampaign,
        'LowBudgetCampaign': LowBudgetCampaign
    }

    def __init__(self):
        self.influencers: List[BaseInfluencer] = []
        self.campaigns: List[BaseCampaign] = []

    def register_influencer(self, influencer_type: str, username: str, followers: int, engagement_rate: float):
        if influencer_type not in self.VALID_INFLUENCER_TYPES:
            return f'{influencer_type} is not an allowed influencer type.'

        if self.__get_influencer_by_username(username):
            return f'{username} is already registered.'

        new_influencer = self.VALID_INFLUENCER_TYPES[influencer_type](
            username, followers, engagement_rate)

        self.influencers.append(new_influencer)

        return f'{username} is successfully registered as a {influencer_type}.'

    def create_campaign(self, campaign_type: str, campaign_id: int, brand: str, required_engagement: float):
        if campaign_type not in self.VALID_CAMPAIGN_TYPES:
            return f'{campaign_type} is not a valid campaign type.'

        if self.__get_campaign_by_id(campaign_id):
            return f'Campaign ID {campaign_id} has already been created.'

        new_campaign = self.VALID_CAMPAIGN_TYPES[campaign_type](
            campaign_id, brand, required_engagement)

        self.campaigns.append(new_campaign)

        return f'Campaign ID {campaign_id} for {brand} is successfully created as a {campaign_type}.'

    def participate_in_campaign(self, influencer_username: str, campaign_id: int):
        influencer = self.__get_influencer_by_username(influencer_username)
        if not influencer:
            return f"Influencer '{influencer_username}' not found."

        campaign = self.__get_campaign_by_id(campaign_id)
        if not campaign:
            return f'Campaign with ID {campaign_id} not found.'

        if not campaign.check_eligibility(influencer.engagement_rate):
            return f"Influencer '{influencer.username}' does not meet the eligibility criteria for the campaign with ID {campaign_id}."

        influencer_payment = influencer.calculate_payment(campaign)

        if influencer_payment > 0:
            campaign.approved_influencers.append(influencer)
            campaign.budget -= influencer_payment
            influencer.campaigns_participated.append(campaign)

            return f"Influencer '{influencer.username}' has successfully participated in the campaign with ID {campaign.campaign_id}."

    def calculate_total_reached_followers(self):
        total_followers = {}

        for campaign in self.campaigns:
            if campaign.approved_influencers:
                total_reached_followers = sum(influencer.reached_followers(
                    campaign.__class__.__name__) for influencer in campaign.approved_influencers)

                total_followers[campaign] = total_reached_followers

        return total_followers

    def influencer_campaign_report(self, username: str):
        influencer: BaseInfluencer = self.__get_influencer_by_username(username)

        if not influencer.campaigns_participated:
            return f'{username} has not participated in any campaigns.'

        return influencer.display_campaigns_participated()

    def campaign_statistics(self):
        sorted_campaigns = sorted(self.campaigns, key=lambda campaign: (
            len(campaign.approved_influencers), -campaign.budget))

        result = ["$$ Campaign Statistics $$"]

        for campaign in sorted_campaigns:
            total_reached_followers = self.calculate_total_reached_followers().get(campaign, 0)

            result.append(
                f"  * Brand: {campaign.brand}, Total influencers: {len(campaign.approved_influencers)}, Total budget: ${campaign.budget:.2f}, Total reached followers: {total_reached_followers}")

        return '\n'.join(result)

    def __get_influencer_by_username(self, influencer_username):
        return next(filter(lambda i: i.username == influencer_username, self.influencers), None)

    def __get_campaign_by_id(self, campaign_id):
        return next(filter(lambda c: c.campaign_id == campaign_id, self.campaigns), None)
