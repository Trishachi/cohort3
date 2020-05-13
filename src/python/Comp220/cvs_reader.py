import csv
head_1 = "CLASS"
head_2 = "RESIDENCY COUNT"
head_3 = "SECTOR"
class_total = "TOTAL BY CLASS: "
sector_total = "TOTAL BY SECTOR: "


def read_csv():
    total_rows = 0
    CLASS_Dict = {}
    SECTOR_Dict = {}
    with open('census_2018.csv', mode='r') as csv_file:
        for row in csv.DictReader(csv_file):
            total_rows += 1
            # comment out for stretch goal
            if row['CLASS'] in CLASS_Dict:
                CLASS_Dict[row['CLASS']] = int(row['RES_CNT']) + \
                    int(CLASS_Dict.get(row['CLASS']))
            else:
                CLASS_Dict.update({row['CLASS']: row['RES_CNT']})
            if row['SECTOR'] in SECTOR_Dict:
                SECTOR_Dict[row['SECTOR']] = int(row['RES_CNT']) + \
                    int(SECTOR_Dict.get(row['SECTOR']))
            else:
                SECTOR_Dict.update({row['SECTOR']: row['RES_CNT']})

            # Uncomment for the stretch goal
            # CLASS_Dict.update(
            #     {row['CLASS']: int(row['RES_CNT']) + int(CLASS_Dict.get(row['CLASS'], '0'))})
            # SECTOR_Dict.update(
            #     {row['SECTOR']: int(row['RES_CNT']) + int(SECTOR_Dict.get(row['SECTOR'], '0'))})

        with open('report.txt', mode='w') as census_report:
            census_report.write(
                "*********************************************\n")
            census_report.write(
                "========== RESIDENCY CENSUS REPORT ==========\n")
            census_report.write(
                "*********************************************\n")
            census_report.write("\n")
            census_report.write("\n")

            census_report.write(
                "---------- Residency Count by CLASS ----------\n")
            census_report.write(
                "*********************************************\n")
            census_report.write(f"{head_1:<20}" f"{head_2:<20}\n")
            census_report.write(
                "----------------------------------------------\n")
            for key, value in CLASS_Dict.items():
                census_report.write(f"{key:<20}" f"{value:<20,}\n")

            census_report.write("\n")
            total_class = sum(CLASS_Dict.values())
            census_report.write(f"{class_total:<20}" f"{total_class:<20,}\n")
            census_report.write("\n")
            census_report.write("\n")

            census_report.write(
                "--------- Residency Count by SECTOR ----------\n")
            census_report.write(
                "*********************************************\n")

            census_report.write(f"{head_3:<20}" f"{head_2:<20}\n")
            census_report.write(
                "----------------------------------------------\n")
            for key, value in SECTOR_Dict.items():
                census_report.write(f"{key:<20}" f"{value:<20,}\n")
            census_report.write("\n")
            total_sector = sum(SECTOR_Dict.values())
            census_report.write(f"{sector_total:<20}" f"{total_sector:<20,}\n")

            census_report.write("\n")
            census_report.write(
                "==============================================\n")
            census_report.write(f"Total number of Rows: {total_rows}\n")

    # print(CLASS_Dict)
    # print(SECTOR_Dict)


read_csv()
