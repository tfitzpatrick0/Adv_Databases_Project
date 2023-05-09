drop table achievements cascade constraints;
create table achievements (
    user_id_fk number(5),
    ach1 number(1),
    ach2 number(1),
    ach3 number(1),
    ach4 number(1),
    ach5 number(1)
)
/
-- alter table achievements add constraint user_id_fka foreign key (user_id_fk) references users (user_id_pk)
-- /