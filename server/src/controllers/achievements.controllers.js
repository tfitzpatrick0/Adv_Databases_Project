import {connect} from "../utils/db";

export const createAchievements = async (req, res) => {
    let conn;
    
    let userid = req.params.uid;
    
  
    try {
      conn = await connect();
      let result = await conn.execute(`INSERT INTO achievements (user_id_fk, ach1, ach2, ach3, ach4, ach5)
      VALUES (:userident, :acha, :achb, :achc, :achd, :ache)`,
      {userident: userid, acha: 0, achb: 0, achc: 0, achd: 0, ache: 0},
      { autoCommit: true }
      );
      console.log("Rows inserted: " + result.rowsAffected);
      return res.status(200).end();
  
    } catch (err) {
      console.error("Error in ca: ", err);
      return res.status(400).end();
    }  
  };

  export const checkA1 = async (req, res) => {
    // ach1, 7-Day Streak, Worked out at least seven times within the past week
    // passes if returns 7 or more
    try {
      let userid = req.params.uid;
      console.log("uid", userid);
      const conn = await connect();

    // q1
    //   const sql = "select count(*) from (select DATE_COMP from HISTORY  where USER_ID_FK = '${userid}') UserDates where DATE_COMP >= current_date - 7";
    //   const result = await conn.execute(sql);
      const result = await conn.execute(`select count(*)
      from (
          select DATE_COMP
          from HISTORY 
          where USER_ID_FK = ${userid}) UserDates
      where DATE_COMP >= current_date - 7`);

  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in checkAch1: ", err);
      return res.status(400).end();

    }
  };


  export const checkA2 = async (req, res) => {
    // ach2, Workout Explorer, Try 5 different workout routines
    // passes if returns 5 or more
    try {
      let userid = req.params.uid;
      console.log("uid", userid);
      const conn = await connect();

      const result = await conn.execute(`select count(distinct ROUTINE_ENTRY_ID)
      from ROUTINE_ENTRY, ROUTINES
      where ROUTINE_ENTRY.ROUTINE_ID_FK = ROUTINES.ROUTINE_ID 
          and USER_ID_FK = ${userid}`);

  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in checkAch2: ", err);
      return res.status(400).end();

    }
  };

  export const checkA3 = async (req, res) => {
    // ach3, Consistency is Key, Logged in at least 16 workouts this past month
    // if 16 or more, then passes
    try {
      let userid = req.params.uid;
      console.log("uid", userid);
      const conn = await connect();

      const result = await conn.execute(`select count(*) 
      from history 
      where user_id_fk = ${userid} 
      and current_date - date_comp  < 30`);

  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in checkAch3: ", err);
      return res.status(400).end();

    }
  };

  export const checkA4 = async (req, res) => {
    // ach4, HydroPro, Drink eight cups of water for at least 7 days
    // if returns 7 or more, passes; 
    try {
      let userid = req.params.uid;
      console.log("uid", userid);
      const conn = await connect();

      const result = await conn.execute(`select count(*)
      from  nutrition
      where USER_ID_FK = ${userid} and WATER_INTAKE >= 64`);

  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in checkAch4: ", err);
      return res.status(400).end();

    }
  };

  export const checkA5 = async (req, res) => {
    // ach5, Old Reliable, Do the same workout routine 5 times
    // if returns 5 or more, passes
    try {
      let userid = req.params.uid;
      console.log("uid", userid);
      const conn = await connect();

      const result = await conn.execute(`select  max(freq) from
      (select ROUTINE_ID_FK, count(ROUTINE_ENTRY_ID) as freq
      from ROUTINE_ENTRY, ROUTINES
      where ROUTINE_ENTRY.ROUTINE_ID_FK = ROUTINES.ROUTINE_ID 
          and USER_ID_FK = ${userid}
      group by ROUTINE_ID_FK) Counts`);

  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in checkAch5: ", err);
      return res.status(400).end();

    }
  };

  export const updateAch = async (req, res) => {
    let conn;
    try {
      conn = await connect();
      let {userid, updatefield} = req.body;
      if (!userid){
        userid = 1;
        //should return to sign in
      }
      console.log(userid);
      if (!updatefield) {
        return res.status(400).send("No new value");
      }
  
      console.log(updatefield);
  
  
      let result= await conn.execute(`UPDATE achievements SET ${updatefield}= 1 WHERE user_id_fk= ${userid}`,
      [],
      {autoCommit: true}
      );
      console.log("Rows updated: " + result.rowsAffected); // 2
      console.log("ROWID of final row updated: " + result.lastRowid);
      
      return res.status(200).send("achievement updated successfully");
    }
    catch (err) {
      console.error("Error in updateAch: ", err);
      return res.status(400).end();
    }
  };