import {connect} from "../utils/db";

export const getHistory = async (req, res) => {
  try {
    const conn = await connect();
    let userid = req.params.uid;
    if (!userid){
      userid = 1;
      //should return to sign in
    }
    const result = await conn.execute(`select workout_id, routine_name, date_comp, exercise_name, reps, tot_weight, sets_comp, intensity from history
    where user_id_fk=${userid}`);

    return res.json(result.rows);
  } catch (err) {
    console.error("Error in getHistory: ", err);
  return res.status(400).end();
  }
};


export const saveWorkoutToHist = async (req, res) => {
  let conn;
  let date;
  date = new Date();
  try {
    let {histid, workoutid, userid, routinename, exercisename, rreps, totweight, setscomp, iintensity} = req.body;
    conn = await connect();
    let result = await conn.execute(`INSERT INTO history (hist_id, workout_id, user_id_fk, routine_name, date_comp, exercise_name, reps, tot_weight, sets_comp, intensity)
    VALUES (:hisid, :workid, :juid, :jrname, :dcomp, :exname, :rrrep, :weigh, :compset, :intense)`,
    {hisid: histid, workid: workoutid, juid: userid, jrname: routinename, dcomp: date, exname: exercisename, rrrep: rreps, weigh: totweight, compset: setscomp, intense: iintensity},
    { autoCommit: true }
    );
    console.log("Rows inserted: " + result.rowsAffected);
    return res.status(200).end();
} catch (err) {
  console.error("Error in saveWorkoutToHist: ", err);
  return res.status(400).end();
}
};
