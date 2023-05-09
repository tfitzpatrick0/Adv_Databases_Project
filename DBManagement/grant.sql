--create or replace directory dmpdir as '/u01/app/oracle/admin/XE/dpdump/';
grant read, write on directory DATA_PUMP_DIR to ramzi;
grant datapump_exp_full_database to ramzi;
exit;
