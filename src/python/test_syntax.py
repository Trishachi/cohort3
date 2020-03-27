import unittest
import syntax

# Syntax for running Tests - python -m unittest test_syntax
# or python -m unittest


class SyntaxTests(unittest.TestCase):
    def test_hello(self):
        pass

    def test_chkVarType(self):
        self.assertEqual(syntax.var_type(23), "int")
        self.assertEqual(syntax.var_type("Chisom"), "str")
        self.assertEqual(syntax.var_type(True), "bool")

    def test_chkBiggerNumber(self):
        self.assertEqual(syntax.bigger_num(1, 2), "2 is bigger")
        self.assertEqual(syntax.bigger_num(2, 1), "2 is bigger")

    def test_chkSumRange(self):
        self.assertEqual(syntax.sum_range(
            0, 100), "The total sum of numbers from 0 to 100 is 4950")

    def test_chkReverseList(self):
        self.assertEqual(syntax.reverse_list(
            [1, 2, 3, 4, 5]), [5, 4, 3, 2, 1])

    def test_chkdoubleNumbers(self):
        self.assertEqual(syntax.double_numbers(
            [1, 2, 3, 4, 5]), [2, 4, 6, 8, 10])

    def test_chkUpdateTodo(self):
        self.assertEqual(syntax.update_todo(
            "code", ["code", "laundry", "dinner"], "sleep"), ["sleep", "laundry", "dinner"])

    def test_chkCountdown(self):
        self.assertEqual(syntax.countdown(10), "10 9 8 7 6 5 4 3 2 1 0 ")

    def test_chkCounter(self):
        self.assertEqual(syntax.counter(10), " 0 1 2 3 4 5 6 7 8 9 10 ")

    def test_profileLookup(self):
        self.assertEqual(syntax.profile_lookup("Chisom", "likes"),
                         ['Reading', 'Coding', 'Swimming'])

    # def test_profileDetails(self):
    #     self.assertEqual(syntax.profile_details(
    #     ), "Chisom Okoye - 0543236543, Harry Potter - 0994372684, Sherlock Holmes - 0487345643,")
