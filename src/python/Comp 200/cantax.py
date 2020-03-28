def tax_calculator(annualIncome):
    totalTax = 0
    if (annualIncome <= 47630):
        totalTax = (annualIncome - 0) * (15 / 100) + 0
    elif (annualIncome > 47630 and annualIncome <= 95259):
        totalTax = (annualIncome - 47630) * (20.5 / 100) + 7145
    elif (annualIncome > 95259 and annualIncome <= 147667):
        totalTax = (annualIncome - 95259) * (26 / 100) + 16908
    elif (annualIncome > 147667 and annualIncome <= 210371):
        totalTax = (annualIncome - 147667) * (29 / 100) + 30535
    elif (annualIncome > 210371):
        totalTax = (annualIncome - 210371) * (33 / 100) + 48719
    return totalTax


print(tax_calculator(250000))
