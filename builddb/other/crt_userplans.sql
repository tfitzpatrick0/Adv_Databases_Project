drop table userplans cascade constraints;
create table userplans
(
    user_plans_id number(2),
    user_id_fk number(5), --add fk
    plan1 number(1), --add fks?
    plan2 number(1),
    plan3 number(1),
    plan4 number(1),
    next_plan number(1),
    constraint user_plans_id_pk primary key (user_plans_id)
)
/