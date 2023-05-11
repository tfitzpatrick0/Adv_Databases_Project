 load data infile "csv_files/history.csv"
 insert into table history
 fields terminated by "," optionally enclosed by '"'
 (hist_id, workout_id, user_id_fk, routine_name, date_comp DATE "MM/DD/YYYY", exercise_name, reps, tot_weight, sets_comp, intensity)
