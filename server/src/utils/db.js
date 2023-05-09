import oracledb from "oracledb";
import * as config from "../config";

export const connect = async () => {
  const conn = await oracledb.getConnection({
    user: config.DB_USER,
    password: config.DB_PASS,
    connectString: config.DB_CONNECT
  });

  return conn;
};