-- foriegn key example
drop table zips cascade constraints;
create table zips
       (zip number(8),
        stcode varchar(2),
        city varchar(25)
        )
/
alter table zips add constraint stcode_fk foreign key (stcode) references states (stcode)
/