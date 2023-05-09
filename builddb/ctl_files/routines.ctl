 load data infile "csv_files/routines.csv"
 insert into table routines
 fields terminated by "," optionally enclosed by '"'
 (routine_id, user_id_fk, r_name, r_desc, user_routine_no)