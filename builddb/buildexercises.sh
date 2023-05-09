# drop triggers/sequences
sqlplus -S ramzi/ramzi @create_all
sqlldr ramzi/ramzi control=ctl_files/exercises.ctl
sqlldr ramzi/ramzi control=ctl_files/userpass.ctl
sqlldr ramzi/ramzi control=ctl_files/users.ctl
sqlldr ramzi/ramzi control=ctl_files/nutrition.ctl
sqlldr ramzi/ramzi control=ctl_files/user_metrics.ctl
sqlldr ramzi/ramzi control=ctl_files/routine_entry.ctl
sqlldr ramzi/ramzi control=ctl_files/routines.ctl
sqlldr ramzi/ramzi control=ctl_files/achievements.ctl
sqlldr ramzi/ramzi control=ctl_files/history.ctl
#create triggers/sequences