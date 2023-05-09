 load data infile "csv_files/nutrition.csv"
 insert into table nutrition
 fields terminated by "," optionally enclosed by '"'
 (nutrition_id_pk, user_id_fk, water_intake, protein, calories)