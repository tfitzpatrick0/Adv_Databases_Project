import { Router } from "express";
import { createAchievements } from "../controllers/achievements.controllers";
import { checkA1 } from "../controllers/achievements.controllers";
import { checkA2 } from "../controllers/achievements.controllers";
import { checkA3 } from "../controllers/achievements.controllers";
import { checkA4 } from "../controllers/achievements.controllers";
import { checkA5 } from "../controllers/achievements.controllers";
import { updateAch } from "../controllers/achievements.controllers";


export const achievementsRouter = Router();

// HOST:PORT/api/achievements routes
achievementsRouter.post("/createachievements/:uid", createAchievements);
achievementsRouter.get("/checkach1/:uid", checkA1);
achievementsRouter.get("/checkach2/:uid", checkA2);
achievementsRouter.get("/checkach3/:uid", checkA3);
achievementsRouter.get("/checkach4/:uid", checkA4);
achievementsRouter.get("/checkach5/:uid", checkA5);
achievementsRouter.post("/updateach", updateAch);


