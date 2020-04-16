def read_file():
    fname = input("Enter filename or path: ")
    line_count = 0
    try:
        with open(fname, "r") as my_file:
            contents = my_file.read()
            word_count = contents.count("else")
            character_count = len(contents)

        with open(fname, "r") as my_file:
            for line in my_file:
                line_count += 1

        # text = fname + " has " + \
        #     str(line_count) + " number of lines, and has " + \
        #     str(word_count) + " 'else' statements and " + \
        #     str(character_count) + " characters."

        text = f"'{fname}' has {line_count} number of lines, {word_count} 'else' statements and {character_count} characters."
    except FileNotFoundError:
        text = "File not found"

    print(text)


read_file()


# Try JS File - "C:\\code\\cohort3\\src\\javascript\\syntax.js"
