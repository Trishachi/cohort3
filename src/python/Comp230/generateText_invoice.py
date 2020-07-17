from openpyxl import load_workbook

wb = load_workbook(filename='store_data.xlsx', data_only=True)

# Load worksheets
customer_sheet = wb['Customers']
products_sheet = wb['Products']
invoice_sheet = wb['Invoices']
invoiceItems_sheet = wb['Invoice_details']

# Function for creating dictionaries


def makeDict(sheet):
    header = sheet[1]
    newDict = {}
    for row in sheet.rows:
        rowDict = {}
        index = 0
        for cell in row:
            rowDict[header[index].value] = cell.value
            index = index+1
        newDict[row[0].value] = rowDict
    # newDict.pop('Customer_id')
    return newDict


def create_invoice(invoiceNumber, invoiceDate, customerID, shippingAddress, invoiceTotal):
    file = open("Invoice.txt", "w")

    file.write("*********************************************\n")
    file.write("================== INVOICE ==================\n")
    file.write("*********************************************\n")
    file.write("\n")
    file.write("\n")
    file.write("Invoice Number: ")
    file.write(str(invoiceNumber) + "\n")
    file.write("Invoice Date: ")
    file.write(str(invoiceDate) + "\n")
    file.write("Customer ID: ")
    file.write(str(customerID) + "\n")
    file.write("Shipping Address: ")
    file.write(str(shippingAddress) + "\n")
    file.write("\n")
    file.write("==============================================\n")
    file.write("Invoice Total: ")
    file.write("$" + str(invoiceTotal) + "\n")


# Create dictionaries from sheets
customerDict = makeDict(customer_sheet)
invoicesDict = makeDict(invoice_sheet)
productsDict = makeDict(products_sheet)
invoiceItemsDict = makeDict(invoiceItems_sheet)
# print(invoiceItemsDict)

# Get invoice id to be generated as input from user
target_invoice = input('Enter Invoice Id: ')
try:
    target_invoice = int(target_invoice)
except:
    print("Invalid input, terminating...")
if target_invoice < 101:
    print("Invalid Invoice ID, terminating...")

# Find and get data of row of the invoice id provided
targetInvoice_row = invoicesDict[target_invoice]
# print(targetInvoice_row)

# Access the cells required for display on the invoice file
invoiceNumber = targetInvoice_row.get("Invoice_id")
invoiceDate = targetInvoice_row.get("Order_date")
customerID = targetInvoice_row.get("Customer_id")
shippingAddress = targetInvoice_row.get("Shipping_add")
invoiceTotal = targetInvoice_row.get("Invoice_amt")
create_invoice(invoiceNumber, invoiceDate, customerID,
               shippingAddress, invoiceTotal)

# print(invoiceDate)
