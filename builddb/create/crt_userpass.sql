drop table userpass cascade constraints;
create table userpass
       (userid number(5),
       username varchar2(50),
       passwd varchar2(20),
       constraint userid_pk primary key (userid)
        )
/