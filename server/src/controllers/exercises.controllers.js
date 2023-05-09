import {connect} from "../utils/db";

export const getAllExercises = async (req, res) => {
  try {
    const conn = await connect();

    const result = await conn.execute(`SELECT * FROM exercises`);

    return res.json(result.rows);
  } catch (err) {
    console.error("Error in getAllExercises: ", err);
  }
};

export const getExercisesByKeyword = async (req, res) => {
  try {
    const conn = await connect();

    const {keyword} = req.body;
    console.log("keyword: ", keyword);
    const result = await conn.execute(`select * from exercises where title like '%${keyword}%'`);

    return res.json(result.rows);
  } catch (err) {
    console.error("Error in getExercisesByKeyword: ", err);
  }
};

export const getExFilters = async (req, res) => {
  try {
    const conn = await connect();

    const result = await conn.execute(`select distinct extype from exercises`);

    return res.json(result.rows);
  } catch (err) {
    console.error("Error in getExFilters: ", err);
  }
};

export const getBodypartFilters = async (req, res) => {
  try {
    const conn = await connect();

    const result = await conn.execute(`select distinct bodypart from exercises`);

    return res.json(result.rows);
  } catch (err) {
    console.error("Error in getBodypartFilters: ", err);
  }
};

export const getEqipmentFilters = async (req, res) => {
  try {
    const conn = await connect();

    const result = await conn.execute(`select distinct equipment from exercises`);

    return res.json(result.rows);
  } catch (err) {
    console.error("Error in getEquipmentFilters: ", err);
  }
};

export const getExLevelFilters = async (req, res) => {
  try {
    const conn = await connect();

    const result = await conn.execute(`select distinct exlevel from exercises`);

    return res.json(result.rows);
  } catch (err) {
    console.error("Error in getExLevelFiters: ", err);
  }
};

export const getExercisesByFilters = async (req, res) => {
  let conn;
  try {
    conn = await connect();
    console.log(req);
    let {keyword, extype, bodypart, equipment, difficulty} = req.body;
    if (!keyword){
      keyword = '%';
    }
    else {
      keyword='%' + keyword + '%';
    }
    if (!extype){
      extype = '%';
    }
    if (!bodypart){
      bodypart = '%';
    }
    if (!equipment){
      equipment = '%';
    }
    if (!difficulty){
      difficulty = '%';
    }


    const result = await conn.execute(`select * from exercises where title like '${keyword}'
    and extype like '${extype}' and bodypart like '${bodypart}' and equipment like '${equipment}' and exlevel like '${difficulty}'`);

    return res.json(result.rows);
  } catch (err) {
    console.error("Error in getExercisesByFilters: ", err);
  }
  finally {
    if (conn) {
      try {
        await conn.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
  
};