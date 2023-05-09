 load data infile "csv_files/user-passwd.csv"
 insert into table userpass
 fields terminated by "," optionally enclosed by '"'
 (userid, username, passwd)
