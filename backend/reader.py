import sys
import csv
import json

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



class CSVWriter:

    def __init__(self, data, file):
        self.data = data
        self.jsonFile = file


    def writeCSV(self):
        for line in self.data:
            with open(self.jsonFile, 'a') as outfile:
                json.dump(line, outfile)



if __name__ == "__main__":
    x = CSVReader("./codefoo.csv")
    x.readCSV()
    y = CSVWriter(x.data, "./output.json")
    y.writeCSV()
