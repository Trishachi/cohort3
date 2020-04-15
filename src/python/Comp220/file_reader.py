def read_file(file):
    try:
        with open(file, "r") as my_file:
            text = my_file.read()
    except FileNotFoundError:
        text = None
    print(text)


read_file("C:\\code\\cohort3\\src\\javascript\\syntax.js")
