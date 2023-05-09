 load data infile "csv_files/plans.csv"
 insert into table plans
 fields terminated by "," optionally enclosed by '"'
 (plan_id, user_id_fk, r1day, r1night, r2day, r2night, r3day, r3night, r4day, r4night, r5day, r5night, r6day, r6night, r7day, r7night)