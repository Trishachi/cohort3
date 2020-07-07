from openpyxl import load_workbook
from openpyxl.worksheet.datavalidation import DataValidation

wb = load_workbook(filename='store_data.xlsx')

wb_sheet = wb.active
ws_invoice = wb['Invoices']
wb.active = ws_invoice
# Change current active worksheet to invoice worksheet
invoice_sheet = wb.active
c1 = invoice_sheet['A1'].value
# Get invoice id to be generated as input from user
# target_invoice = input('Enter Invoice Id: ')

# Iterate over the worksheet rows
for row in invoice_sheet.iter_rows(invoice_sheet.min_row, invoice_sheet.max_row):
    for cell in row:
        print(cell.value)

# for row in invoice_sheet.iter_rows(min_row=1, max_col=1, values_only=True):
#     for value in row:
#         print(value)

# Find row of the invoice id provided
# Collect all data in the row
# Access the cells required for display on the invoice file


# print(c1)
# print(target_invoice)
