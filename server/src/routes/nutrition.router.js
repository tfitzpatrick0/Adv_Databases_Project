import { Router } from "express";
import { addNutritionToHist } from "../controllers/nutrition.controllers";


export const nutritionRouter = Router();

// HOST:PORT/api/nutrition routes
nutritionRouter.post("/addnutritiontohist", addNutritionToHist);

