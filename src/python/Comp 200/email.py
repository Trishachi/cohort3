def email(firstName, lastName):
    name = firstName.lower() + "." + lastName.lower()
    return name + "@evolveu.ca"


print(email("Larry", "Shumlich"))
