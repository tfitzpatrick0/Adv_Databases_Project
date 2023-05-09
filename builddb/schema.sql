USERS(user_id_pk, username, password, first_name, last_name, date_joined, DOB, user_ui_theme, user_is_guest, email, profilePic, bio)

drop table users cascade constraints;
create table users
    (user_id_pk number(5),
    username varchar2(20),
    pswd varchar2(20),
    first_name varchar2(20),
    last_name varchar2(20),
    date_joined date,
    DOB date,
    user_ui_theme number(1),
    user_is_guest number(1),
    email varchar2(20),
    profilePic number(1),
    bio varchar2(50),
    constraint user_id_pk primary key (user_id_pk)
    )
/



USER_BODY_METRICS (metric_id, user_id_fk, date, weight, bicep_measurement, hip_measurement, waist_measurement, chest_measurement, calorie_intake)

drop table user_metrics cascade constraints
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
        calorie_intake number(4),
        sex varchar2(1),
        workout_exp_level varchar2(20)
    )





drop table nutrition cascade constraints;
create table nutrition
    (nutrition_id_pk number(4),
    user_id_fk number(5), --add fk constraint
    water_intake number(5,1),
    protein number(3),
    calories number(6),
    constraint nutrition_id_pk primary key (nutrition_id_pk)
    )

    1,1,300.6,50,300


EXERCISES (exercise_id_pk, workout_desc, muscle_group, category, equipment_type, is_equipment_needed, difficulty, calories_burned, attribute1, attribute2, attribute3, gif_image, video_link)

drop table routine_entry cascade constraints;
create table routine_entry
ROUTINE_ENTRIES(
    routine_entry_id number(2),
    exercise_id_fk number(5), --add fk
    routine_id_fk number(2), --add fk
    workout_name varchar2(100), -- use name to connect with exercises table
    reps number(3),
    tot_weight number(5,1),
    sets_comp number(2),
    duration number(6), --in minutes?
    intensity number(2), --1 to 10 i guess
    notes varchar2(150), --allow 150 chars
    constraint routine_entry_id_pk primary key (routine_entry_id)
    )



ROUTINES (routine_id_pk, user_id_fk, name, desc, user_routine_no) (DIAMOND: list_routine_entries)
drop table routines cascade constraints;
create table routines(
    routine_id number(3),
    user_id_fk number(5), --add fk
    r_name varchar2(25),
    r_desc varchar2(150),
    user_routine_no number(2),
    constraint routine_id_pk primary key (routine_id)

)
/

USERPLANS (id, user_id_fk, plan1, plan2, plan3, plan4, next_plan) (DIAMOND)

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


PLANS (plan_id_pk, user_id_fk, r1day, r1night, r2day, r2night, r3day, r3night, r4day, r4night, r5day, r5night, r6day, r6night, r7day, r7night)

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


ACHIEVEMENTS (user_id_pk, ach1, …, ach20)
drop table achievements cascade constraints;
create table achievements (
    user_id_fk number(5),
    ach1 number(1),
    ach2 number(1),
    ach3 number(1),
    ach4 number(1),
    ach5 number(1),
)
/
-- alter table achievements add constraint user_id_fka foreign key (user_id_fk) references users (user_id_pk)
-- /


-- METRICS (stats) (user_id_pk, days_worked_out, calories_burned, liters_consumed, weight_change,  [other_metrics, TBD], …)

-- followedBy(user_id_fk, followerId_fk) user_id_fk references user_id from USERS, followerId_fk references followerId from Followers 

-- Followers(followerId)

-- Posts(postId, timestamp, video, picture, location, user_id_fk) user_id_fk references user_id from USERS

-- likedBy(user_id_fk, postId_fk, likeId_fk) user_id_fk references user_id from USERS, postId_fk references postId from Posts, likeId_fk references likeId from Likes

-- Likes(likeId, numLikes, likerId)
 
-- commentedBy(user_id_fk, postId_fk, commentId_fk) user_id_fk references user_id from USERS, postId_fk references postId from Posts, commentId_fk references commentId from Comments
 
-- Comments(commentId, commenterId, timestamp, comment)