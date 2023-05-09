 load data infile "csv_files/users.csv"
 insert into table users
 fields terminated by "," optionally enclosed by '"'
 (user_id_pk, username, first_name, last_name, age, date_joined DATE "MM/DD/YYYY", DOB DATE "MM/DD/YYYY", user_ui_theme, user_is_guest, email, profilePic, bio, sex)
