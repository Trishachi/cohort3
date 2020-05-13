import csv


def read_csv():
    total_res_count = 0
    total_rows = 0
    line_count = 0
    resi_count = 0
    with open('census_2018.csv', mode='r') as csv_file:
        # csv_reader = csv.DictReader(csv_file)
        for row in csv.DictReader(csv_file):
            total_rows += 1
            # print(row['CLASS'], row['SECTOR'], row['RES_CNT'])
            if row['CLASS'] == 'Residential':
                resi_count += float(row['RES_CNT'])
                line_count += 1
        print(resi_count)

    with open('report.txt', mode='w') as census_report:
        census_report.write("*********************************************\n")
        census_report.write("============ CENSUS REPORT 2018 =============\n")
        census_report.write("*********************************************\n")
        census_report.write("\n")
        census_report.write("\n")

        census_report.write("**********************************************\n")
        census_report.write("---------- Residency Count by CLASS ----------\n")
        census_report.write("**********************************************\n")
        census_report.write("CLASS \t\t\t RESIDENCY COUNT \t\t No of Rows\n")
        census_report.write(
            f"Residential \t\t {resi_count} \t\t\t {line_count}\n")
        census_report.write("\n")
        census_report.write("\n")

        census_report.write("**********************************************\n")
        census_report.write("--------- Residency Count by SECTOR ----------\n")
        census_report.write("**********************************************\n")
        census_report.write("\n")
        census_report.write("\n")

        census_report.write("==============================================\n")
        census_report.write(f"Total number of Rows: {total_rows}\n")
        census_report.write(f"Total Residency Count: {total_res_count}")


read_csv()
