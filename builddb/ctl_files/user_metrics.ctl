 load data infile "csv_files/metrics.csv"
 insert into table user_metrics
 fields terminated by "," optionally enclosed by '"'
 (metric_id, user_id_fk, record_dt DATE "MM/DD/YYYY", body_weight, bicep_measurement, hip_measurement, waist_measurement, chest_measurement, nutrition_id_fk, workout_exp_level)
