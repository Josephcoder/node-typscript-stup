import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { NotFoundError } from "./errors";
import { currentUser, errorHandler } from "./middleware";
import cors from "cors";

import { authRouter } from "./routes";
import path from "path";

export const createApp = () => {
  const app = express();
  app.set("trust proxy", 1);
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.use(currentUser);
  app.use("/files", express.static(path.join(__dirname, "/public")));

  app.use("/api", authRouter);

  app.all("*", async (req, res) => {
    throw new NotFoundError("Route not found");
  });

  app.use(errorHandler);

  return app;
};
