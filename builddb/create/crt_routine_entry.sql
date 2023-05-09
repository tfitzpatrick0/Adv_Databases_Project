drop table routine_entry cascade constraints;
create table routine_entry
(
    routine_entry_id number(2),
    exercise_id_fk number(5), --add fk
    routine_id_fk number(2), --add fk
    -- workout_name varchar2(100), -- use name to connect with exercises table
    reps number(3),
    tot_weight number(5,1),
    sets_comp number(2),
    duration number(6), --in minutes?
    intensity number(2), --1 to 10 i guess
    notes varchar2(150), --allow 150 chars
    constraint routine_entry_id_pk primary key (routine_entry_id)
    )
/
-- alter table routine_entry add constraint exercise_id_fk foreign key (exercise_id_fk) references exercises (id)
-- /
-- alter table routine_entry add constraint routine_id_fk foreign key (routine_id_fk) references routines (routine_id)
-- /
