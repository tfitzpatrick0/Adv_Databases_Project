drop table user_metrics cascade constraints;
create table user_metrics
    (
        metric_id number(3),
        user_id_fk number(5), --add fk constraint
        record_dt date,
        body_weight number(4,1),
        bicep_measurement number(3,1),
        hip_measurement number(3,1),
        waist_measurement number(3,1),
        chest_measurement number(3,1),
        nutrition_id_fk number(4),
        workout_exp_level varchar2(20)
    )
/
-- alter table user_metrics add constraint user_id_fkm foreign key (user_id_fk) references users (user_id_pk)
-- /
-- alter table user_metrics add constraint nutrition_id_fk foreign key (nutrition_id_fk) references nutrition (nutrition_id_pk)
-- /
ALTER SESSION
SET NLS_DATE_FORMAT = 'MM/DD/YYYY';