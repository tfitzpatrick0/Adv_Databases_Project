 load data infile "csv_files/userplans.csv"
 insert into table userplans
 fields terminated by "," optionally enclosed by '"'
 (user_plans_id, user_id_fk, plan1, plan2, plan3, plan4, next_plan)