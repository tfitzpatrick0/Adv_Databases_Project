 load data infile "csv_files/megaGymDataset.csv"
 insert into table exercises
 fields terminated by "," optionally enclosed by '"'
 (id, Title, exType, BodyPart, Equipment, exLevel)
