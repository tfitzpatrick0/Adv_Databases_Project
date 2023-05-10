import { Router } from "express";
import { getHistory } from "../controllers/history.controllers";
import { saveWorkoutToHist } from "../controllers/history.controllers";


export const historyRouter = Router();

// HOST:PORT/api/history routes
historyRouter.get("/gethistory/:uid", getHistory);
historyRouter.post("/saveworkouttohist/", saveWorkoutToHist);