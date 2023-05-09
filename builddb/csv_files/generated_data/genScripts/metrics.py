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

# Define function to generate random date within this month
def random_date_this_month():
    return date.today() - timedelta(days=random.randint(1, 30))

# Create CSV file and write headers
with open('metrics.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    #writer.writerow(['id', 'number_1_25', 'date', 'body_weight', 'bicep_measurement', 'hip_measurement', 'waist_measurement', 'chest_measurement', 'number_1_25_2', 'workout_difficulty'])

    # Generate data for each record and write to file
    for i in range(num_records):
        id = i + 1
        number_1_25 = random.randint(1, 25)
        rec_date = random_date_this_month().strftime('%m/%d/%Y')
        body_weight = round(random.uniform(120, 200), 1)
        bicep_measurement = round(random.uniform(10, 20),1)
        hip_measurement = round(random.uniform(30, 50),1)
        waist_measurement = round(random.uniform(20, 40),1)
        chest_measurement = round(random.uniform(30, 50),1)
        number_1_25_2 = random.randint(1, 25)
        workout_difficulty = random.choice(['Beginner', 'Intermediate', 'Advanced'])

        writer.writerow([id, number_1_25, rec_date, body_weight, bicep_measurement, hip_measurement, waist_measurement, chest_measurement, number_1_25_2, workout_difficulty])

