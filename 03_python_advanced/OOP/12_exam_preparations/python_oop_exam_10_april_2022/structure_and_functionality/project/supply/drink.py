from project.supply.supply import Supply


class Drink(Supply):
    INITIAL_ENERGY = 15

    def __init__(self, name: str):
        super().__init__(name=name, energy=self.INITIAL_ENERGY)