from abc import ABC, abstractmethod


class BaseClient(ABC):
    ALLOWED_MEMBERSHIP_TYPES = ['Regular', 'VIP']

    def __init__(self, name: str, membership_type: str):
        self.name = name
        self.membership_type = membership_type
        self.points = 0        

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value: str):
        if not value.strip():
            raise ValueError('Client name should be determined!')

        self._name = value

    @property
    def membership_type(self):
        return self._membership_type

    @membership_type.setter
    def membership_type(self, value: str):
        if value not in self.ALLOWED_MEMBERSHIP_TYPES:
            raise ValueError(
                'Invalid membership type. Allowed types: Regular, VIP.')

        self._membership_type = value

    @abstractmethod
    def earning_points(self, order_amount: float):
        pass

    def apply_discount(self):
        if self.points >= 100:
            discount_percentage = 10
            points_used = 100
        elif 50 <= self.points < 100:
            discount_percentage = 5
            points_used = 50
        else:
            discount_percentage = 0
            points_used = 0

        remaining_points = max(0, self.points - points_used)
        self.points -= points_used

        return discount_percentage, remaining_points
