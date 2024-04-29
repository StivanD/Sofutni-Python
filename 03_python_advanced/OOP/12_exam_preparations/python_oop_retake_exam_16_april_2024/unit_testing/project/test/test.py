from unittest import TestCase, main
from project.restaurant import Restaurant


class TestRestaurant(TestCase):
    def setUp(self):
        self.restaurant1 = Restaurant('Restaurant1', 50)
        self.restaurant2 = Restaurant('Restaurant2', 3)
        self.restaurant2.waiters = [{'name': 'Waiter1', 'total_earnings': 100},
                                     {'name': 'Waiter2', 'total_earnings': 200}]

    def test_init(self):
        self.assertEqual('Restaurant1', self.restaurant1.name)
        self.assertEqual(50, self.restaurant1.capacity)
        self.assertEqual([], self.restaurant1.waiters)

        self.assertEqual('Restaurant2', self.restaurant2.name)
        self.assertEqual(3, self.restaurant2.capacity)
        self.assertEqual([{'name': 'Waiter1', 'total_earnings': 100}, {'name': 'Waiter2', 'total_earnings': 200}],
                         self.restaurant2.waiters)

    def test_name_setter_when_name_is_empty_raises_value_error(self):
        with self.assertRaises(ValueError) as ve:
            self.restaurant1.name = ''

        expected = 'Invalid name!'
        self.assertEqual(expected, str(ve.exception))

    def test_capacity_setter_when_capacity_is_less_than_zero_raises_value_error(self):
        with self.assertRaises(ValueError) as ve:
            self.restaurant1.capacity = -5

        expected = 'Invalid capacity!'
        self.assertEqual(expected, str(ve.exception))

    def test_add_waiter_if_there_is_not_enough_capacity(self):
        self.restaurant2.capacity = 2
        result = self.restaurant2.add_waiter('Waiter3')
        expected = "No more places!"
        self.assertEqual(expected, result)
        self.assertEqual([{'name': 'Waiter1', 'total_earnings': 100}, {'name': 'Waiter2', 'total_earnings': 200}],
                         self.restaurant2.waiters)

    def test_add_waiter_if_the_waiter_already_exists(self):
        result = self.restaurant2.add_waiter('Waiter1')
        expected = 'The waiter Waiter1 already exists!'
        self.assertEqual(expected, result)
        self.assertEqual([{'name': 'Waiter1', 'total_earnings': 100}, {'name': 'Waiter2', 'total_earnings': 200}],
                         self.restaurant2.waiters)

    def test_add_waiter_successfully(self):
        result = self.restaurant2.add_waiter('Waiter3')
        expected = 'The waiter Waiter3 has been added.'
        self.assertEqual(expected, result)
        self.assertEqual([{'name': 'Waiter1', 'total_earnings': 100}, {'name': 'Waiter2', 'total_earnings': 200},
                          {'name': 'Waiter3'}], self.restaurant2.waiters)

    def test_remove_waiter_if_waiter_does_not_exist(self):
        result = self.restaurant2.remove_waiter('Waiter3')
        expected = 'No waiter found with the name Waiter3.'
        self.assertEqual(expected, result)
        self.assertEqual([{'name': 'Waiter1', 'total_earnings': 100}, {'name': 'Waiter2', 'total_earnings': 200}],
                         self.restaurant2.waiters)

    def test_remove_waiter_successfully(self):
        result = self.restaurant2.remove_waiter('Waiter1')
        expected = 'The waiter Waiter1 has been removed.'
        self.assertEqual(expected, result)
        self.assertEqual([{'name': 'Waiter2', 'total_earnings': 200}], self.restaurant2.waiters)

    def test_get_total_earnings(self):
        self.restaurant2.waiters[0]['total_earnings'] = 100
        self.restaurant2.waiters[1]['total_earnings'] = 200
        result = self.restaurant2.get_total_earnings()
        expected = 300
        self.assertEqual(expected, result)

    def test_get_waiters_with_min_and_max_earnings(self):
        result = self.restaurant2.get_waiters(min_earnings=150, max_earnings=250)
        expected = [{'name': 'Waiter2', 'total_earnings': 200}]
        self.assertEqual(expected, result)

    def test_get_waiters_with_min_earnings_only(self):
        result = self.restaurant2.get_waiters(min_earnings=150)
        expected = [{'name': 'Waiter2', 'total_earnings': 200}]
        self.assertEqual(expected, result)

    def test_get_waiters_with_max_earnings_only(self):
        result = self.restaurant2.get_waiters(max_earnings=150)
        expected = [{'name': 'Waiter1', 'total_earnings': 100}]
        self.assertEqual(expected, result)

    def test_get_waiters_with_no_filter(self):
        result = self.restaurant2.get_waiters()
        expected = [{'name': 'Waiter1', 'total_earnings': 100}, {'name': 'Waiter2', 'total_earnings': 200}]
        self.assertEqual(expected, result)


if __name__ == '__main__':
    main()
