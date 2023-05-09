import { Router } from "express";
import { getAnyMaxId } from "../controllers/general.controllers";

export const generalRouter = Router();

// HOST:PORT/api/general routes
generalRouter.post("/getanymaxid", getAnyMaxId);


