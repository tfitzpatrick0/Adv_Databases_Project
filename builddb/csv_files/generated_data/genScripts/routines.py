import csv
import random
from faker import Faker
from datetime import date, timedelta

# Initialize faker module
fake = Faker()

# Set random seed for reproducibility
random.seed(42)

# Define number of records to generate
num_records = 50

input_file = 'rout_names.txt'
output_file = 'routines.csv'
names = []

with open(input_file, 'r') as file_in:
    for line in file_in:
        names.append(line.strip('\n'))
with open(output_file, mode='w', newline='') as file_out:
    writer = csv.writer(file_out)

    #generate data and write to file

    for i in range(num_records):
        rout_id = i+1
        user_id = random.randint(1,25)
        r_name = random.choice(names)
        rout_num = random.randint(1,10)

        writer.writerow([rout_id, user_id, r_name, rout_num])    

