drop sequence newusercounter;

create sequence newusercounter
    minvalue 10000
    start with 10001
    increment by 1;
/