import csv
import random
from faker import Faker

fake = Faker()

# Create a list of post-workout notes
post_workout_notes = ["Feeling great!", "A bit tired but accomplished", "Need to stretch more next time", "Feeling stronger than ever", "Hit a new PR!"]

# Open the output file for writing
with open('routine_entries.csv', 'w', newline='') as file:

    # Define the headers for the CSV file
    #headers = ['entry_id', 'exercise_id', 'reps', 'weight', 'sets', 'duration', 'intensity', 'notes']

    # Create a CSV writer
    #writer = csv.DictWriter(file, fieldnames=headers)
    writer = csv.writer(file)    
    # Write the headers to the file
    #writer.writeheader()

    # Generate 1000 routine entries
    for i in range(50):
        entry_id = i+1

        
        exercise_id = random.randint(1, 50)
        rout_id = random.randint(0, 2917)
        reps = random.randint(5, 20)

        weight = random.randint(10, 150)

        sets = random.randint(1, 5)

        duration = random.randint(30, 90)

        intensity = random.randint(1, 10)

        notes = random.choice(post_workout_notes)

        # Write the routine entry to the CSV file
        writer.writerow([entry_id, rout_id, exercise_id, reps, weight, sets, duration, intensity, notes])

