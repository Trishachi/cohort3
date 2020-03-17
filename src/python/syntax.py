"""
define attributes / variables
- number
- string
- boolean
- array
- dictionary / objects
- undefined

sample if / else

functions
- parameters
- returns

arrays
- add to the front
- add to the end
- update values

loops
- for
- for/in
- while
- do while
- forEach (with array and function)

Objects / Dictionaries
- declare object
- lookup key to retrieve value
"""

# Code Starts Here


def var_type(input):
    return type(input)


def bigger_num(num1, num2):
    if num1 > num2:
        return str(num1) + " is bigger"
    else:
        return str(num2) + " is bigger"


print(var_type(23))
print(var_type("Chisom"))
print(var_type(True))

print(bigger_num(3, 6))
