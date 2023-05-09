import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import * as config from "./config";

import {exercisesRouter} from "./routes/exercises.router";
import { profileRouter } from "./routes/profile.router";
import { routinesRouter } from "./routes/routines.router";
import { historyRouter } from "./routes/history.router";
import { userpassRouter } from "./routes/userpass.router";
import { generalRouter } from "./routes/general.router";
import { achievementsRouter } from "./routes/achievements.router";

export const app = express();

app.disable("x-powered-by");

// imported middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

// TESTING THAT THE SERVER WORKS
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// API Routes
app.use("/api/exercises", exercisesRouter);
app.use("/api/profile", profileRouter);
app.use("/api/routines", routinesRouter);
app.use("/api/history", historyRouter);
app.use("/api/userpass", userpassRouter);
app.use("/api/general", generalRouter);
app.use("/api/achievements", achievementsRouter);

export const start = async () => {
  try {
    // await connect();
    const server = app.listen(config.PORT, () => {
      console.log(`Server running on ${config.HOST}:${config.PORT}`);
      console.log(`God Tier Gains API on ${config.HOST}:${config.PORT}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};