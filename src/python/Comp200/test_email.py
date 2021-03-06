import unittest
import email


class SyntaxTests(unittest.TestCase):
    def test_hello(self):
        pass

    def test_emailAddress(self):
        self.assertEqual(email.email("Larry", "Shumlich"),
                         "larry.shumlich@evolveu.ca")
        self.assertEqual(email.email("Heiko", "Peters"),
                         "heiko.peters@evolveu.ca")
        self.assertEqual(email.email(24, "Peters"),
                         "Please enter a string")
