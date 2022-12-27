import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

declare module "http" {
  interface IncomingHttpHeaders {
    "perdua-token"?: string;
  }
}
interface User {
  id: string;
  email: string;
}
interface UserPayload {
  data: User;
}

declare global {
  namespace Express {
    interface Request {
      userData: User;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers["perdua-token"]) {
    return next();
  }
  try {
    const payload = jwt.verify(
      req.headers["perdua-token"],
      JWT_SECRET
    ) as UserPayload;

    req.userData = payload.data;
  } catch (error) {}
  next();
};
