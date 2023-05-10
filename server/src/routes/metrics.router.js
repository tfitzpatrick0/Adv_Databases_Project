import { Router } from "express";
import { getMetricsForGraph, getMetricsForHistoryWithNutrition } from "../controllers/metrics.controllers";
import { getPieExpMetrics } from "../controllers/metrics.controllers";
import { getMetricsForHistory } from "../controllers/metrics.controllers";
import { addMetricsToHist } from "../controllers/metrics.controllers";


export const metricsRouter = Router();

// HOST:PORT/api/metrics routes
metricsRouter.post("/getmetricsforgraph", getMetricsForGraph);
metricsRouter.get("/getpieexpmetrics/:uid", getPieExpMetrics);
metricsRouter.get("/getmetricsforhistory/:uid", getMetricsForHistory);
metricsRouter.get("/getmetricsforhistorywithnutrition/:uid", getMetricsForHistoryWithNutrition);
metricsRouter.post("/addmetricstohist", addMetricsToHist);

