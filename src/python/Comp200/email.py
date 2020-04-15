def email(firstName, lastName):
    if type(firstName) == str and type(lastName) == str:
        name = firstName.lower() + "." + lastName.lower()
        return name + "@evolveu.ca"
    else:
        return "Please enter a string"


# print(email("Larry", "Shumlich"))
