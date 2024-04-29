from project.campaigns.base_campaign import BaseCampaign


class HighBudgetCampaign(BaseCampaign):
    def __init__(self, campaign_id: int, brand: str, required_engagement: float):
        super().__init__(campaign_id, brand, budget=5000.0,
                         required_engagement=required_engagement)

    def check_eligibility(self, engagement_rate: float) -> bool:
        return engagement_rate >= 1.2 * self.required_engagement
