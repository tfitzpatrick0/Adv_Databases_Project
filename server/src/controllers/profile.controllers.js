import {connect} from "../utils/db";

export const getProfile = async (req, res) => {
  try {
    const conn = await connect();
    let userid = req.params.uid;
    if (!userid){
      userid = 1;
    }
    const result = await conn.execute(`SELECT username, bio, age, profilepic, ach1, ach2, ach3, ach4, ach5 FROM users u,achievements a where u.user_id_pk=${userid} and u.user_id_pk=a.user_id_fk`);
    return res.json(result.rows);
  } catch (err) {
    console.error("Error in getProfile: ", err);
  }
};

export const getMetrics = async (req, res) => {
  try {
    const conn = await connect();
    let userid = req.params.uid;
    if (!userid){
      userid = 1;
      //should return to sign in
    }
    await conn.execute(`ALTER SESSION SET NLS_DATE_FORMAT = 'MM/DD/YYYY'`);
    const result = await conn.execute(`select body_weight from user_metrics where user_id_fk='${userid}'
    and record_dt between '01/12/2000' and '01/16/2000'`);
    //need to update dates

    return res.json(result.rows);
  } catch (err) {
    console.error("Error in getMetrics: ", err);
  }
};

//copy metrics and get all info as well as nutrition join for histroy page


export const updateIcon = async (req, res) => {
  let conn;
  try {
    conn = await connect();
    let {userid, newval} = req.body;
    if (!userid){
      userid = 1;
      //should return to sign in
    }
    console.log(userid);
    if (!newval) {
      return res.status(400).send("No new value");
    }

    console.log(newval);


    let result= await conn.execute(`UPDATE users SET profilepic= :pp WHERE user_id_pk= ${userid}`,
    [newval],
    {autoCommit: true}
    );
    console.log("Rows updated: " + result.rowsAffected); // 2
    console.log("ROWID of final row updated: " + result.lastRowid);
    // await conn.execute(`update users set profilepic=${newval} where user_id_pk=${userid}`);
    
    return res.status(200).send("Icon updated successfully");
  }
  catch (err) {
    console.error("Error in updateIcon: ", err);
    return res.status(400).end();
  }
};

export const updateBio = async (req, res) => {
  try {
    const conn = await connect();
    let {userid, bio} = req.body;
    
    const result = await conn.execute(`UPDATE users SET bio = :v WHERE user_id_pk = ${userid}`, 
    [bio],
    {autoCommit: true}
    );

    // return res.json(result.rows);
    return res.status(200).end();
  } catch (err) {
    console.error("Error in updateBio: ", err);
  }
};