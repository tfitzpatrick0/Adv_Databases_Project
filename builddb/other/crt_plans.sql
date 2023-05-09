drop table plans cascase constraints;
create table plans (
    plan_id number(5),
    user_id_fk number(5),
    r1day number(3), --fk for each routine id
    r1night number(3),
    r2day number(3),
    r2night number(3),
    r3day number(3),
    r3night number(3),
    r4day number(3),
    r4night number(3),
    r5day number(3),
    r5night number(3),
    r6day number(3),
    r6night number(3),
    r7day number(3),
    r7night number(3),
    constraint plan_id_pk primary key (plan_id)
)
/