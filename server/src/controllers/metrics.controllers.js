import {connect} from "../utils/db";

//line graph
export const getMetricsForGraph = async (req, res) => {
    try {
        let date;
        date = new Date();
      const conn = await connect();
      let {key, userid} = req.body; //key can be body_weight, bicep_measurement, hit_measurement, waist_measurement, chest_measurement
     
      await conn.execute(`ALTER SESSION SET NLS_DATE_FORMAT = 'MM/DD/YYYY'`);
      const result = await conn.execute(`select record_dt, ${key} from user_metrics where user_id_fk='${userid}'
      and record_dt between '01/12/1800' and '01/16/2024' order by record_dt`);
  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in getMetricsForGraph: ", err);
      return res.status(400).end();
    }
  };

  // pie chart, use the values counted to get the pie values
  // if not all 3 values returned the count for it is 0
  export const getPieExpMetrics = async (req, res) => {
    try {
        
      const conn = await connect();
      let userid = req.params.uid;

      const result = await conn.execute(`SELECT workout_exp_level, COUNT(workout_exp_level) AS count
      FROM user_metrics
      Where user_id_fk='${userid}'
      GROUP BY workout_exp_level`);
  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in getPieExpMetrics: ", err);
      return res.status(400).end();
    }
  };

  export const getMetricsForHistory = async (req, res) => {
    try {
        
      const conn = await connect();
      let userid = req.params.uid;

      const result = await conn.execute(`select record_dt, body_weight, bicep_measurement, hip_measurement, waist_measurement, chest_measurement, nutrition_id_fk
      from user_metrics
      where user_id_fk='${userid}'
      order by record_dt`);
  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in getMetricsForHistory: ", err);
      return res.status(400).end();
    }
  };

  export const getMetricsForHistoryWithNutrition = async (req, res) => {
    try {
        
      const conn = await connect();
      let userid = req.params.uid;

      const result = await conn.execute(`select m.record_dt, m.body_weight, m.bicep_measurement, m.hip_measurement, m.waist_measurement, m.chest_measurement, n.water_intake, n.protein, n.calories
      from user_metrics m, nutrition n
      where m.user_id_fk='${userid}'
      and n.nutrition_id_pk=m.nutrition_id_fk
      order by record_dt`);
  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in getMetricsForHistory: ", err);
      return res.status(400).end();
    }
  };

  export const addMetricsToHist = async (req, res) => {
    let conn;
    try {
        let date;
        date = new Date();
      conn = await connect();
      let {metricid, userid, bodyweight, bicep, hip, waist, chest, nutrition} = req.body; //key can be body_weight, bicep_measurement, hit_measurement, waist_measurement, chest_measurement
     
      let result = await conn.execute(`INSERT INTO user_metrics (metric_id, user_id_fk, record_dt, body_weight, bicep_measurement, hip_measurement, waist_measurement, chest_measurement, nutrition_id_fk, workout_exp_level)
      VALUES (:metid, :useridfk, :currdt, :weigh, :bicepm, :hipm, :waistm, :chestm, :nutidfk, :explevel)`,
      {metid: metricid, useridfk: userid, currdt: date, weigh: bodyweight, bicepm: bicep, hipm: hip, waistm: waist, chestm: chest, nutidfk: nutrition, explevel: "Expert"},
      { autoCommit: true }
      );
      console.log("Rows inserted: " + result.rowsAffected);
      return res.status(200).end();
  
    } catch (err) {
      console.error("Error in addMetricsToHist: ", err);
      return res.status(400).end();
    }  
  };

  export const getRadarMetrics = async (req, res) => {
    try {
      console.log(req.body);
      const conn = await connect();
      let {userid, field} = req.body; //can be bodypart, equipment, extype, exlevel
      const result = await conn.execute(`select ${field}, count(${field}) as count
      FROM exercises e, history h
      WHERE e.title= h.exercise_name
      AND user_id_fk='${userid}'
      GROUP BY ${field}`);
  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in getRadarMetrics: ", err);
      return res.status(400).end();
    }
  };