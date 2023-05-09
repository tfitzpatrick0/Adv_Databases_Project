create or replace trigger newusertrig
after insert on userpass
-- trigger for each row instead of tablewide trigger
for each row
begin
    select newusercounter.nextval
    into :new.userid
    from dual;
end;
/