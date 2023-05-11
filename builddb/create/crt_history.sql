drop table history cascade constraints;
create table history(
    hist_id number(5),
    workout_id number(5),
    user_id_fk number(5), --add fk
    routine_name varchar2(50),
    date_comp date,
    exercise_name varchar2(100),
    reps number(3),
    tot_weight number(5,1),
    sets_comp number(2),
    intensity number(2),
    constraint hist_id_pk primary key (hist_id)   
)
/
ALTER SESSION
SET NLS_DATE_FORMAT = 'MM/DD/YYYY';
-- alter table routines add constraint user_id_fkh foreign key (user_id_fk) references users (user_id_pk)
-- /
-- alter table routines add constraint routine_id_fkh foreign key (routine_id_fk) references routines (routine_id_pk)
-- /
