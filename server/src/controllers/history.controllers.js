import {connect} from "../utils/db";

export const getHistory = async (req, res) => {
  try {
    const conn = await connect();
    let userid = req.params.uid;
    if (!userid){
      userid = 1;
      //should return to sign in
    }
    const result = await conn.execute(`select hist_id, date_comp, r_name from history h, routines r
    where h.routine_id_fk = r.routine_id
    and r.user_id_fk=${userid}`);

    return res.json(result.rows);
  } catch (err) {
    console.error("Error in getHistory: ", err);
  }
};

