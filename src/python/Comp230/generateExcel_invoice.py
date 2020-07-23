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


def createXl_invoice(invoiceNumber, invoiceDate, customerID,
                     shippingAddress, invoiceTotal, customerFullname, customerEmail, customerAdd, customerPhone):
    invoice = load_workbook(filename='invoice_template.xlsx', data_only=True)
    current_invoice = invoice.active
    current_invoice['H4'] = invoiceDate
    current_invoice['H6'] = invoiceNumber
    current_invoice['H8'] = customerID
    current_invoice['D14'] = shippingAddress
    current_invoice['F14'] = customerAdd
    current_invoice['H35'] = invoiceTotal
    current_invoice['D12'] = customerFullname
    current_invoice['F12'] = customerFullname
    current_invoice['D15'] = customerPhone
    current_invoice['F15'] = customerPhone
    current_invoice['D16'] = customerEmail

    invoice.save('invoice_template.xlsx')


# Create dictionaries from sheets
customerDict = makeDict(customer_sheet)
invoicesDict = makeDict(invoice_sheet)
productsDict = makeDict(products_sheet)
invoiceItemsDict = makeDict(invoiceItems_sheet)

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

# Access the cells required for display on the invoice file
invoiceNumber = targetInvoice_row.get("Invoice_id")
invoiceDate = targetInvoice_row.get("Order_date")
customerID = targetInvoice_row.get("Customer_id")
shippingAddress = targetInvoice_row.get("Shipping_add")
invoiceTotal = targetInvoice_row.get("Invoice_amt")

targetCustomer_row = customerDict[customerID]

customerFirstname = targetCustomer_row.get("First_name")
customerLastname = targetCustomer_row.get("Last_name")
customerFullname = customerFirstname + " " + customerLastname
customerEmail = targetCustomer_row.get("Email")
customerAdd = targetCustomer_row.get("Address")
customerPhone = targetCustomer_row.get("Phone")

for row in invoiceItems_sheet:
    for value in row:
        print(value)

createXl_invoice(invoiceNumber, invoiceDate, customerID,
                 shippingAddress, invoiceTotal, customerFullname, customerEmail, customerAdd, customerPhone)
