import {connect} from "../utils/db";
import oracledb from "oracledb";

//get max id add 1, new userid pk
export const getAnyMaxId = async (req, res) => {
    try {
    let {table, column} = req.body;
      console.log("table", table);
      const conn = await connect();
      
      const result = await conn.execute(`select max(${column}) from ${table}`);
  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in getMaxId: ", err);
      return res.status(400).end();
      // return res.status(400).send("error message");
    }
  };