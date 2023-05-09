 load data infile "csv_files/routine_entries.csv"
 insert into table routine_entry
 fields terminated by "," optionally enclosed by '"'
 (routine_entry_id, exercise_id_fk, routine_id_fk, reps, tot_weight, sets_comp, duration, intensity, notes)
