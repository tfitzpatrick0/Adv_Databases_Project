drop table exercises cascade constraints;
create table exercises
       (id number(5),
       Title varchar2(100),
    --    exDesc varchar2(500),
       exType varchar2(30),
       BodyPart varchar2(30),
       Equipment varchar2(30),
       exLevel varchar2(20),
    --    Rating number (3, 1),
    --    RatingDesc varchar2(100),
       constraint id_pk primary key (id)
        )
/