 load data infile "csv_files/achievements.csv"
 insert into table achievements
 fields terminated by "," optionally enclosed by '"'
 (user_id_fk, ach1, ach2, ach3, ach4, ach5)