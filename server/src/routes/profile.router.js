import { Router } from "express";
import { getProfile } from "../controllers/profile.controllers";
import { getMetrics } from "../controllers/profile.controllers";
import { updateIcon } from "../controllers/profile.controllers";
import { updateBio } from "../controllers/profile.controllers";

export const profileRouter = Router();

// HOST:PORT/api/profile routes
profileRouter.get("/getprofile/:uid", getProfile);
profileRouter.get("/getmetrics/:uid", getMetrics);
profileRouter.post("/updateicon", updateIcon);
profileRouter.post("/updatebio", updateBio);

//need methods to check if the achievements are reached then a method to update