import unittest
import syntax


def fun(x):
    return x + 1


class SyntaxTests(unittest.TestCase):
    def test_hello(self):
        print("Hello World!!!")
