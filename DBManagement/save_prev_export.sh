#!/bin/bash

current_time=$(date "+%Y.%m.%d-%H.%M.%S")
echo "Current Time : $current_time"

orig_dmp="curr_db.dmp"
orig_log="curr_exp.log"
prev_dmp="prev_db_$current_time.dmp"
prev_log="prev_log_$current_time.log"
path="/u01/app/oracle/admin/XE/dpdump"
echo $path

dmp_file_loc="$path/$orig_dmp"
log_file_loc="$path/$orig_log"
prev_file_loc="$path/$prev_dmp"
prev_log_loc="$path/$prev_log"

# Check the original file exists or not
if [ -f $dmp_file_loc ]; then
     # Rename the file
     $(mv $dmp_file_loc $prev_file_loc)
     echo "The dmp file was renamed."
fi

# Check the original log file exists or not
if [ -f $log_file_loc ]; then
     # Rename the file
     $(mv $log_file_loc $prev_log_loc)
     echo "The log file was renamed."
fi

exit

