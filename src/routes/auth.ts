import { Router } from "express";
import { body } from "express-validator";
import { AuthContr } from "../controllers";
import { validateRequest } from "../middleware";
const router = Router();

router.post(
  "/user/login",
  [
    body("username").not().notEmpty().withMessage("Invalid new username"),
    body("password").not().notEmpty().withMessage("Invalid old password"),
  ],
  validateRequest,
  AuthContr.login
);
export { router as authRouter };
