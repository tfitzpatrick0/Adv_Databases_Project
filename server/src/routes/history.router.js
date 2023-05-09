import { Router } from "express";
import { getHistory } from "../controllers/history.controllers";


export const historyRouter = Router();

// HOST:PORT/api/history routes
historyRouter.get("/gethistory/:uid", getHistory);