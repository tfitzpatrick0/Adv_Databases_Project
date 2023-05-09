drop table nutrition cascade constraints;
create table nutrition
    (nutrition_id_pk number(4),
    user_id_fk number(5), --add fk constraint
    water_intake number(5,1),
    protein number(3),
    calories number(4),
    constraint nutrition_id_pk primary key (nutrition_id_pk)
    )
/
-- alter table nutrition add constraint user_id_fkn foreign key (user_id_fk) references users (user_id_pk)
-- /