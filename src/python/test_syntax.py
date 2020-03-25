import unittest
import syntax


class SyntaxTests(unittest.TestCase):
    def test_hello(self):
        print("Hello World!!!")

    def test_chkVarType(self):
        self.assertEqual(syntax.var_type(23), "int")
        self.assertEqual(syntax.var_type("Chisom"), "str")
        self.assertEqual(syntax.var_type(True), "bool")
