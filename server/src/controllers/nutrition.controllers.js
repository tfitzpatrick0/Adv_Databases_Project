import {connect} from "../utils/db";

//   export const getNutritionForHistoryByMetric = async (req, res) => {
//     try {
        
//       const conn = await connect();
//       let userid = req.params.uid;

//       const result = await conn.execute(`select water_intake, protein calories
//       from nutrition
//       where user_id_fk='${userid}'
//       order by record_dt`);
  
//       return res.json(result.rows);
//     } catch (err) {
//       console.error("Error in getNutritionForHistoryByMetric: ", err);
//       return res.status(400).end();
//     }
//   };

  export const addNutritionToHist = async (req, res) => {
    let conn;
    try {
        
      conn = await connect();
      let {nutritionid, userid, water, proteins, cals} = req.body; //key can be body_weight, bicep_measurement, hit_measurement, waist_measurement, chest_measurement
     
      let result = await conn.execute(`INSERT INTO nutrition (nutrition_id_pk, user_id_fk, water_intake, protein, calories)
      VALUES (:nutid, :useridfk, :wat, :pro, :cal)`,
      {nutid: nutritionid, useridfk: userid, wat: water, pro: proteins, cal:cals},
      { autoCommit: true }
      );
      console.log("Rows inserted: " + result.rowsAffected);
      return res.status(200).end();
  
    } catch (err) {
      console.error("Error in addNutritionToHist: ", err);
      return res.status(400).end();
    }  
  };