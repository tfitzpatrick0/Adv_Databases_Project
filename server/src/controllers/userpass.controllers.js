import {connect} from "../utils/db";
import oracledb from "oracledb";

//get max id add 1, new userid pk
export const getMaxId = async (req, res) => {
  try {
    const conn = await connect();
    
    const result = await conn.execute(`select max(userid) from userpass`);

    return res.json(result.rows);
  } catch (err) {
    console.error("Error in getMaxId: ", err);
  }
};

//see if username is in use
export const checkExistingUser = async (req, res) => {
    try {
      const conn = await connect();
      const {username} = req.body;
      const result = await conn.execute(`select * from userpass where username='${username}'`);
  
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in checkExistingUser: ", err);
    }
  };

// check username/password is authenticated
  export const validateUP = async (req, res) => {
    try {
      const conn = await connect();
      let {username, passwd} = req.body;
      const result = await conn.execute(`select * from userpass where username='${username}' and passwd='${passwd}'`);
      return res.json(result.rows);
    } catch (err) {
      console.error("Error in validateUP: ", err);
    }
  };


//add new user to userpass
  export const insertNewUser = async (req, res) => {
    let conn;
    let {uid, uname, pass} = req.body;
    const sql="INSERT INTO userpass VALUES (:userid, :username, :passwd)";
    
    const binds = [
      [uid, uname, pass]
      // [40004, "tom", "baumboos"]
    ];

    const options = {
      autoCommit: true,
      bindDefs: [
        { type: oracledb.NUMBER },
        { type: oracledb.STRING, maxSize: 50 },
        { type: oracledb.STRING, maxSize: 20 }
      ]
    };

    try {
      conn = await connect();
      let result = await conn.executeMany(sql, binds, options);
      console.log("result is: ", result);
      return res.status(200).end();
  
    } catch (err) {
      console.error("Error in insertNewUser: ", err);
      return res.status(400).end();
    }    
  };






 //create user and achievement table

export const insertNewUserInfo = async (req, res) => {
  let conn;
  
  let {uuserid, uusername, ufirst, ulast, uage, uemail, ubio, usex, day, month, year} = req.body;
  
  let date;
  date = new Date(); // joined date is current time

  let dob=new Date();
  dob.setFullYear(year, month, day); //january is 0, dec is 11
  
  console.log("gen date: ", date);
  console.log("gen date: ", dob);

  try {
    conn = await connect();
    let result = await conn.execute(`INSERT INTO users (user_id_pk, username, first_name, last_name, age, date_joined, DOB, user_ui_theme, user_is_guest, email, profilePic, bio, sex)
    VALUES (:user_id_pk, :username, :first_name, :last_name, :age, :date_joined, :DOB, :user_ui_theme, :user_is_guest, :email, :profilePic, :bio, :sex)`,
    {user_id_pk: uuserid, username: uusername, first_name: ufirst, last_name: ulast, age: uage, date_joined: date, DOB: dob, user_ui_theme: 1, user_is_guest: 1, email:uemail, profilePic: 1, bio: ubio, sex: usex},
    // {user_id_pk: 40008, username: 'pojo', first_name: 'connman', last_name: 'poj', age: 22, date_joined: date, DOB: dob, user_ui_theme: 1, user_is_guest: 1, email:'test@test.com', profilePic: 1, bio: '', sex: 'M'},
    { autoCommit: true }
    );
    console.log("Rows inserted: " + result.rowsAffected);
    return res.status(200).end();

  } catch (err) {
    console.error("Error in insertNewUserInfo: ", err);
    return res.status(400).end();
  }  
};