
def create_invoice():
    file = open("Invoice.txt", "w")

    file.write("*********************************************\n")
    file.write("================== INVOICE ==================\n")
    file.write("*********************************************\n")
    file.write("\n")
    file.write("\n")
    file.write("Invoice Number: ")
    file.write("Invoice number goes here \n")
    file.write("Invoice Date: ")
    file.write("Invoice date goes here \n")
    file.write("Customer ID: ")
    file.write("Customer ID goes here \n")
    file.write("Shipping Address: ")
    file.write("Shipping address goes here \n")
    file.write("\n")
    file.write("==============================================\n")
    file.write("Invoice Total: ")
    file.write("Invoice total goes here \n")

create_invoice()
