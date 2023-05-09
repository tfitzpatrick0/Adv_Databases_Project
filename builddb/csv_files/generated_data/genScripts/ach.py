import csv
import random
from faker import Faker

fake = Faker()

num_ach = 5

# Open the output file for writing
with open('achievements.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    for i in range(25):
        user_id = i+1
        ach1 = 0 
        ach2 = 0
        ach3 = 0
        ach4 = 0
        ach5 = 0

        writer.writerow([user_id, ach1, ach2, ach3, ach4, ach5])
