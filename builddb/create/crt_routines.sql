drop table routines cascade constraints;
create table routines(
    routine_id number(3),
    user_id_fk number(5), --add fk
    r_name varchar2(50),
    r_desc varchar2(200),
    user_routine_no number(2),
    constraint routine_id_pk primary key (routine_id)
)
/
-- alter table routines add constraint user_id_fkr foreign key (user_id_fk) references users (user_id_pk)
-- /
