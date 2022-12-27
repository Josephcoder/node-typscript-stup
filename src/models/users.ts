import { ResultSetHeader, RowDataPacket } from "mysql2";
import pool from "../config/mysql";
import { BadRequestError } from "../errors";

class Users {
  isUserExist = async (username: string) => {
    try {
      const sql = `
        SELECT
        *
        FROM 
        user
        WHERE 
        email=? OR phone=?
      `;
      let result = await pool.query<RowDataPacket[]>(sql, [username, username]);

      return result[0];
    } catch (error: any) {
      throw new BadRequestError(error.message);
    }
  };
}
export const UserMod = new Users();
