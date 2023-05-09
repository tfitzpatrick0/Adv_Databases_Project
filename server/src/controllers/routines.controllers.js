import {connect} from "../utils/db";

export const getAllRoutines = async (req, res) => {
  try {
    const conn = await connect();
    let userid = req.params.uid;
    if (!userid){
      userid = 1;
      //should return to sign in
    }
    const result = await conn.execute(`select *
    from exercises ex,
    (select *
    from routine_entry en, routines r
    where en.routine_id_fk=r.routine_id and r.user_id_fk='${userid}'
    order by r.routine_id)x
    where x.exercise_id_fk=ex.id`);

    return res.json(result.rows);
  } catch (err) {
    console.error("Error in getAllRoutines: ", err);
  }
};

export const updateRoutineEntry = async (req, res) => {
    try {
      const conn = await connect();
      let {entryid, key, value} = req.body;
      
      const result = await conn.execute(`UPDATE routine_entry SET ${key} = :v WHERE routine_entry_id= ${entryid}`, 
      [value],
      {autoCommit: true}
      );
      // const result = await conn.execute(`update routine_entry set '${key}'='${value}' where routine_entry_id='${entryid}'`);
  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in updateRoutineEntry: ", err);
    }
  };

  //get max routine id add 1
  export const addRoutine = async (req, res) => {
    let conn;
    
    let {routineid, uuserid, title, descr} = req.body;
  
    try {
      conn = await connect();
      let result = await conn.execute(`INSERT INTO routines (routine_id, user_id_fk, r_name, r_desc, user_routine_no)
      VALUES (:jrid, :juid, :jrname, :jrdesc, :jrno)`,
      // {jrid: 12, juid: 3, jrname: 'this is a test', jrdesc: 'a really difficult test', jrno: 1},
      {jrid: routineid, juid: uuserid, jrname: title, jrdesc: descr, jrno: null},
      { autoCommit: true }
      );
      console.log("Rows inserted: " + result.rowsAffected);
      return res.status(200).end();
  
    } catch (err) {
      console.error("Error in addRoutine: ", err);
      return res.status(400).end();
    }  
  };

  export const addRoutineEntry = async (req, res) => {
    let conn;
    
    let {routineeid, exid, routinefk, rreps, tweight, setsc, dur, intense, note} = req.body;
  
    try {
      conn = await connect();
      let result = await conn.execute(`INSERT INTO routine_entry (routine_entry_id, exercise_id_fk, routine_id_fk, reps, tot_weight, sets_comp, duration, intensity, notes)
      VALUES (:reid, :eidf, :ridf, :repped, :weightlift, :sset, :ddur, :iintense, :nnotes)`,
      // {reid: 12, eidf: 4, , ridf: 12, repped: 12, weightlift: 180, sset: 5, ddur: 180, iintense: 9 nnotes: 'this was a fun one'},
      {reid: routineeid, eidf: exid, ridf: routinefk, repped: rreps, weightlift: tweight, sset: setsc, ddur: dur, iintense: intense, nnotes: note},

      { autoCommit: true }
      );
      console.log("Rows inserted: " + result.rowsAffected);
      return res.status(200).end();
  
    } catch (err) {
      console.error("Error in addRoutineEntry: ", err);
      return res.status(400).end();
    }  
  };

  export const updateRoutine = async (req, res) => {
    try {
      const conn = await connect();
      let {routineid, key, value} = req.body;
      //can update name, desc, routine no
      
      const result = await conn.execute(`UPDATE routines SET ${key} = :v WHERE routine_id= ${routineid}`, 
      [value],
      {autoCommit: true}
      );
  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in updateRoutine: ", err);
    }
  };

  // export const generateRec = async (req, res) => {
  //   try {
  //     let {extype, bodypart, equipment, difficulty} = req.body;
  //   if (!extype){
  //     extype = '%';
  //   }
  //   if (!bodypart){
  //     bodypart = '%';
  //   }
  //   if (!equipment){
  //     equipment = '%';
  //   }
  //   if (!difficulty){
  //     difficulty = '%';
  //   }


  //     const conn = await connect();

  //     var result = await conn.execute(`select *
  //     from exercises,
  //     (select trunc(dbms_random.value(1,2917)) rnum from dual) x
  //     where id = x.rnum and extype like '${extype}' and bodypart like '${bodypart}' and equipment like '${equipment}' and exlevel like '${difficulty}'`);

  //     return res.json(result.rows);
  //   } catch (err) {
  //     console.error("Error in generateRec: ", err);
  //     return res.status(400).end();

  //   }
  // };
  export const generateRec = async (req, res) => {
    try {
      const conn = await connect();

const firstQuery = `SELECT *
                    FROM exercises,
                    (SELECT TRUNC(DBMS_RANDOM.VALUE(1, 2917)) rnum FROM dual) x
                    WHERE id = x.rnum`;

const firstQueryResult = await conn.execute(firstQuery);
const secondQueryResult = await conn.execute(firstQuery);
const thirdQueryResult = await conn.execute(firstQuery);
const fourthQueryResult = await conn.execute(firstQuery);

const response = {
  firstQueryResult: firstQueryResult.rows,
  secondQueryResult: secondQueryResult.rows,
  thirdQueryResult: thirdQueryResult.rows,
  fourthQueryResult: fourthQueryResult.rows
};

return res.json(response);

    } catch (err) {
      console.error("Error in generateRec: ", err);
      return res.status(400).end();

    }
  };

  export const getRoutinesByUser = async (req, res) => {
    try {
      const conn = await connect();
      let userid = req.params.uid;
      if (!userid){
        userid = 1;
        //should return to sign in
      }
      const result = await conn.execute(`select routine_id, r_name, r_desc from routines where user_id_fk='${userid}'`);
  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in getRoutinesByUser: ", err);
      return res.status(400).end();
    }
  };

  export const getEntriesByRoutine = async (req, res) => {
    try {
      const conn = await connect();
      let routineid = req.params.routineidfk;
      if (!routineid){
        routineid = 1;
      }
      const result = await conn.execute(`select e.title, x.reps, x.tot_weight, x.sets_comp, x.intensity
      from exercises e,
      (select routine_entry_id, exercise_id_fk, reps, tot_weight, sets_comp, intensity from routine_entry where routine_id_fk='${routineid}')x
      where x.exercise_id_fk=e.id`);
  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in getEntriesByRoutine: ", err);
      return res.status(400).end();
    }
  };