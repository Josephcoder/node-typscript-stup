import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

import { BadRequestError } from "../errors";
import { UserMod } from "../models";
import { Password } from "../services";

class Auth {
  login = async (req: Request, res: Response): Promise<Response> => {
    // Check if user email and phone number exist

    const isExist = await UserMod.isUserExist(req.body.username);

    if (isExist.length <= 0) {
      throw new BadRequestError("Email or password does not match!");
    }

    const passwordsMatch = await Password.compare(
      isExist[0].password,
      req.body.password
    );

    if (!passwordsMatch) {
      throw new BadRequestError("Email or password does not match!");
    }

    // Generate JWT
    const user_jwt = jwt.sign(
      {
        user_id: isExist[0].user_id,
        email: isExist[0].email,
      },
      JWT_SECRET,
      {
        expiresIn: "6h",
      }
    );

    let userInfo = isExist[0];
    userInfo.jwt = user_jwt;

    delete userInfo.password;
    return res.status(200).json(userInfo);
  };
}
export const AuthContr = new Auth();
