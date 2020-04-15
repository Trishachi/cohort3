import unittest
import cantax

# Syntax for running Tests - python -m unittest test_cantax
# or python -m unittest


class SyntaxTests(unittest.TestCase):
    def test_hello(self):
        pass

    def test_tacCalculator(self):
        # Make sure the correct Federal Tax is calculated
        self.assertEqual(cantax.tax_calculator(1), 0.15)
        self.assertEqual(cantax.tax_calculator(2), 0.3)
        self.assertEqual(cantax.tax_calculator(50000), 7630.85)
        self.assertEqual(cantax.tax_calculator(100000), 18140.66)
        self.assertEqual(cantax.tax_calculator(150000), 31211.57)
        self.assertEqual(cantax.tax_calculator(250000), 61796.57)
