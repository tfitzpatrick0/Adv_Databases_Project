import { Router } from "express";
import { getMaxId } from "../controllers/userpass.controllers";
import { checkExistingUser } from "../controllers/userpass.controllers";
import { validateUP } from "../controllers/userpass.controllers";
import { insertNewUser } from "../controllers/userpass.controllers";
import { insertNewUserInfo } from "../controllers/userpass.controllers";

export const userpassRouter = Router();

// HOST:PORT/api/userpass routes
userpassRouter.get("/getmaxid", getMaxId);
userpassRouter.post("/checkexistinguser", checkExistingUser);
userpassRouter.post("/validateup", validateUP);
userpassRouter.post("/insertnewuser", insertNewUser);
userpassRouter.post("/insertnewuserinfo", insertNewUserInfo);



