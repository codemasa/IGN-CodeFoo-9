import sys
import csv

class CSVReader:

    def __init__(self, csvFile):
        self.csvFile = csvFile
        self.data = []

    def readCSV(self):
        with open(self.csvFile, mode='r') as csv_file:
            csv_reader = csv.DictReader(csv_file)
            line_count = 0
            for row in csv_reader:
                self.data.append(row)



if __name__ == "__main__":
    x = CSVReader("./codefoo.csv")
    x.readCSV()
    print(x.data)
