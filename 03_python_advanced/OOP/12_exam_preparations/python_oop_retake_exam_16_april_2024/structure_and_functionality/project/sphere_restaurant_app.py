from project.clients.base_client import BaseClient
from project.clients.regular_client import RegularClient
from project.clients.vip_client import VIPClient
from project.waiters.base_waiter import BaseWaiter
from project.waiters.full_time_waiter import FullTimeWaiter
from project.waiters.half_time_waiter import HalfTimeWaiter

from typing import List


class SphereRestaurantApp:
    VALID_WAITER_TYPES = {
        'FullTimeWaiter': FullTimeWaiter,
        'HalfTimeWaiter': HalfTimeWaiter
    }

    VALID_CLIENT_TYPES = {
        'RegularClient': RegularClient,
        'VIPClient': VIPClient
    }

    def __init__(self):
        self.waiters = []
        self.clients = []

    def hire_waiter(self, waiter_type: str, waiter_name: str, hours_worked: int):
        if waiter_type not in self.VALID_WAITER_TYPES:
            return f'{waiter_type} is not a recognized waiter type.'

        if self._get_object_by_name(waiter_name, self.waiters):
            return f'{waiter_name} is already on the staff.'

        new_waiter = self.VALID_WAITER_TYPES[waiter_type](
            waiter_name, hours_worked)
        self.waiters.append(new_waiter)

        return f'{waiter_name} is successfully hired as a {waiter_type}.'

    def admit_client(self, client_type: str, client_name: str):
        if client_type not in self.VALID_CLIENT_TYPES:
            return f'{client_type} is not a recognized client type.'

        if self._get_object_by_name(client_name, self.clients):
            return f'{client_name} is already a client.'

        new_client = self.VALID_CLIENT_TYPES[client_type](client_name)
        self.clients.append(new_client)

        return f'{client_name} is successfully admitted as a {client_type}.'

    def process_shifts(self, waiter_name: str):
        waiter = self._get_object_by_name(waiter_name, self.waiters)

        if not waiter:
            return f'No waiter found with the name {waiter_name}.'

        return waiter.report_shift()

    def process_client_order(self, client_name: str, order_amount: float) -> str:
        client = self._get_object_by_name(client_name, self.clients)

        if not client:
            return f'{client_name} is not a registered client.'

        return f'{client_name} earned {client.earning_points(order_amount)} points from the order.'

    def apply_discount_to_client(self, client_name: str) -> str:
        client: BaseClient = self._get_object_by_name(
            client_name, self.clients)

        if not client:
            return f'{client_name} cannot get a discount because this client is not admitted!'

        discount = client.apply_discount()

        return f'{client_name} received a {discount[0]}% discount. Remaining points {discount[1]}'

    def generate_report(self):
        sorted_waiters = sorted(
            self.waiters, key=lambda w: -w.calculate_earnings())

        total_earnings = 0
        waiters_details = []

        for waiter in sorted_waiters:
            total_earnings += waiter.calculate_earnings()
            waiters_details.append(waiter.__str__())

        total_clients_unused_points = sum(
            client.points for client in self.clients)

        report = [
            "$$ Monthly Report $$",
            f"Total Earnings: ${total_earnings:.2f}",
            f"Total Clients Unused Points: {total_clients_unused_points}",
            f"Total Clients Count: {len(self.clients)}",
            "** Waiter Details **"
        ]

        report.extend(waiters_details)

        return "\n".join(report)

    @staticmethod
    def _get_object_by_name(name, collection):
        obj = [x for x in collection if x.name == name]
        return obj[0] if obj else None
