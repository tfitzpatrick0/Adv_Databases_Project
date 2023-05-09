import csv
import random
from faker import Faker
from datetime import date, timedelta

# Initialize faker module
fake = Faker()

# Set random seed for reproducibility
random.seed(42)

# Define number of users to generate
num_rows = 50

# Define function to generate random date within past month
def random_date_past_month():
    return date.today() - timedelta(days=random.randint(1, 30))

# Create CSV file and write headers
with open('nutrition.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
   # writer.writerow(['user_id', 'user_name', 'password', 'first_name', 'last_name', 'age', 'date_past_month', 'date_of_birth', 'random_digit', 'bool1', 'email', 'profile_pic', 'bio_description'])

    # Generate data for each user and write to file
    for i in range(num_rows):
        n_id = i + 1
        user_id = random.randint(1,25)
        water = round(random.uniform(50, 175),1)
        protein = round(random.uniform(50, 175),1) 
        calories = random.randint(1500, 2500)
        
        writer.writerow([n_id, user_id,water, protein, calories])

