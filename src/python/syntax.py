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


def sum_range(minNum, maxNum):
    minNum = int(minNum)
    maxNum = int(maxNum)
    sum = 0
    for x in range(minNum, maxNum):
        sum += x
    result = "The total sum of numbers from {} to {} is {}"
    print(result.format(minNum, maxNum, sum))
    return result


def reverse_list(lst):
    newList = []
    length = len(lst)
    for item in lst:
        length -= 1
        newList.append(item)
    return newList

    # def update_todo():
    # def profile_lookup():
    # def double_numbers():
    # def profile_details():
    # def countdown():
    # def counter():


# print(var_type(23))
# print(var_type("Chisom"))
# print(var_type(True))

# print(bigger_num(3, 6))
# sum_range(0, 100)

print(reverse_list([1, 2, 3, 4, 5]))
