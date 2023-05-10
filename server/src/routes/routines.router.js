import { Router } from "express";
import { getAllRoutines, updateRoutine } from "../controllers/routines.controllers";
import { updateRoutineEntry } from "../controllers/routines.controllers";
import { addRoutine } from "../controllers/routines.controllers";
import { addRoutineEntry } from "../controllers/routines.controllers";
import { generateRec } from "../controllers/routines.controllers";
import { getRoutinesByUser } from "../controllers/routines.controllers";
import { getEntriesByRoutine } from "../controllers/routines.controllers";
import { deleteRoutine } from "../controllers/routines.controllers";
import { deleteRoutineEntriesByEID } from "../controllers/routines.controllers";

export const routinesRouter = Router();

// HOST:PORT/api/routines routes
routinesRouter.get("/getallroutines/:uid", getAllRoutines);
routinesRouter.post("/updateroutineentry", updateRoutineEntry);
routinesRouter.post("/addroutine", addRoutine);
routinesRouter.post("/addroutineentry", addRoutineEntry);
routinesRouter.post("/updateroutine", updateRoutine);
routinesRouter.get("/generaterec", generateRec);
routinesRouter.get("/getroutinesbyuser/:uid", getRoutinesByUser);
routinesRouter.get("/getentriesbyroutine/:routineidfk", getEntriesByRoutine);
routinesRouter.post("/deleteroutine", deleteRoutine);
routinesRouter.post("/deleteroutineentriesbyeid", deleteRoutineEntriesByEID);

