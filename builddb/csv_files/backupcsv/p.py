import csv

reader=csv.reader(open('user-passwd.csv', 'r'), delimiter=',')
writer=csv.writer(open('myfilewithoutduplicates.csv', 'w'), delimiter=',')

entries = set()
for row in reader:
     key = (row[0], row[1]) # instead of just the last name
     if key not in entries:
         writer.writerow(row)
         entries.add(key)