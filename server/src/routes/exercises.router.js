import { Router } from "express";
import { getAllExercises } from "../controllers/exercises.controllers";
import { getExercisesByKeyword } from "../controllers/exercises.controllers";
import { getExFilters } from "../controllers/exercises.controllers";
import { getBodypartFilters } from "../controllers/exercises.controllers";
import { getEqipmentFilters } from "../controllers/exercises.controllers";
import { getExLevelFilters } from "../controllers/exercises.controllers";
import { getExercisesByFilters } from "../controllers/exercises.controllers";

export const exercisesRouter = Router();

// HOST:PORT/api/exercises routes
exercisesRouter.get("/getallexercises", getAllExercises);

//search by keyword
exercisesRouter.post("/getexercisesbykeyword", getExercisesByKeyword);

//get search filters
exercisesRouter.get("/getextypefilters", getExFilters);
exercisesRouter.get("/getbodypartfilters", getBodypartFilters);
exercisesRouter.get("/getequipmentfilters", getEqipmentFilters);
exercisesRouter.get("/getexlevelfilters", getExLevelFilters);
exercisesRouter.post("/getexercisesbyfilters", getExercisesByFilters);

//search by filters