import os


def read_directory():
    fpath = input("Enter file path: ")
    # Initialize a total file size and count
    folder_count = 0
    file_count = 0
    total_size = 0
    # Read files in directory and subdirectory
    for root, directory, file in os.walk(fpath):
        # For each file in the list of files
        # print(root, directory, file)
        file_count += len(file)
        folder_count += len(directory)
        # Find size of file
        for item in file:
            file_size = os.stat(f"{root}\{item}").st_size
            print(f"FileName: {item}, FileSize: {file_size}")
            # Add file size to total file size variable
            total_size += file_size
            # Print report of number of files and total size of directory
    print(
        f"Your directory has {folder_count} folders, {file_count} files and a total size of {total_size} bytes")


read_directory()

# Try JS File Path - "C:\\code\\cohort3\\src\\javascript\\2019-11-01-oop"
