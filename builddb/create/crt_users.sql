drop table users cascade constraints;
create table users
    (user_id_pk number(5),
    username varchar2(20),
    first_name varchar2(20),
    last_name varchar2(20),
    age number(3),
    date_joined date,
    DOB date,
    user_ui_theme number(1),
    user_is_guest number(1),
    email varchar2(20),
    profilePic number(1),
    bio varchar2(200),
    sex varchar2(3),
    constraint user_id_pk primary key (user_id_pk)
    )
/
ALTER SESSION
SET NLS_DATE_FORMAT = 'MM/DD/YYYY';
