 load data infile "csv_files/history.csv"
 insert into table history
 fields terminated by "," optionally enclosed by '"'
 (hist_id, routine_id_fk, user_id_fk, date_comp DATE "MM/DD/YYYY")
