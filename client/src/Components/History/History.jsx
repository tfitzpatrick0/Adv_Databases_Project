import React, { useState, useEffect } from "react";
import axios from "axios";
import "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import HistoryItem from "./HistoryItem";
import NutritionItem from "./NutritionItem";
import AddNutrition from "./AddNutrition";

import {
  getHistoryRoute,
  getRadarMetricsRoute,
  getMetricsForHistoryWithNutritionRoute,
  getMetricsForGraph,
} from "../../utils/api";

import "./styles.css";

export default function History() {
  const [history, setHistory] = useState([]);
  const [historyMetrics, setHistoryMetrics] = useState("exlevel");
  const [historyHistoryChartData, setHistoryChartData] = useState({});
  const [renderHistoryChart, setRenderHistoryChart] = useState(false);

  const [nutrition, setNutrition] = useState([]);
  const [nutritionMetrics, setNutritionMetrics] = useState("body_weight");
  const [nutritionChartData, setNutritionChartData] = useState({});
  const [renderNutritionChart, setRenderNutritionChart] = useState(false);

  useEffect(() => {
    const uid = localStorage.getItem("uid");

    axios.get(getHistoryRoute + uid).then((res) => {
      console.log("History Data: ", res.data);

      let currHistory = [];
      res.data.forEach((currHistoryEntry) => {
        let currHistoryItem = currHistory.find(
          (historyItem) => historyItem.id === currHistoryEntry[0]
        );

        if (currHistoryItem) {
          // if currHistoryItem exists, add the entry to the currHistoryItem's entry list
          currHistoryItem.entries.push({
            exName: currHistoryEntry[3],
            sets: currHistoryEntry[6],
            reps: currHistoryEntry[4],
            weight: currHistoryEntry[5],
            intensity: currHistoryEntry[7],
          });
        } else {
          // if currHistoryItem does not exist, create a new history object and add it to currHistory
          currHistory.push({
            id: currHistoryEntry[0],
            routineName: currHistoryEntry[1],
            date: currHistoryEntry[2],
            entries: [
              {
                exName: currHistoryEntry[3],
                sets: currHistoryEntry[6],
                reps: currHistoryEntry[4],
                weight: currHistoryEntry[5],
                intensity: currHistoryEntry[7],
              },
            ],
          });
        }
      });

      setHistory(currHistory);
    });
  }, []);

  useEffect(() => {
    const uid = localStorage.getItem("uid");

    axios.get(getMetricsForHistoryWithNutritionRoute + uid).then((res) => {
      console.log("Nutrition Data: ", res.data);

      let currNutrition = [];
      res.data.forEach((currNutritionEntry) => {
        currNutrition.push({
          date: currNutritionEntry[0],
          entries: [
            {
              bodyWeight: currNutritionEntry[1],
              bicepMeasurement: currNutritionEntry[2],
              hipMeasurement: currNutritionEntry[3],
              waistMeasurement: currNutritionEntry[4],
              chestMeasurement: currNutritionEntry[5],
              waterIntake: currNutritionEntry[6],
              protein: currNutritionEntry[7],
              calories: currNutritionEntry[8],
            },
          ],
        });

        setNutrition(currNutrition);
      });
    });
  }, []);

  useEffect(() => {
    setRenderHistoryChart(false);
    let currHistoryChartData = {
      labels: [],
      datasets: [
        {
          label: historyMetrics,
          data: [],
        },
      ],
    };

    axios
      .post(getRadarMetricsRoute, {
        userid: localStorage.getItem("uid"),
        field: historyMetrics,
      })
      .then((res) => {
        console.log("History Metrics Data: ", res.data);

        res.data.forEach((currMetric) => {
          currHistoryChartData.labels.push(currMetric[0]);
          currHistoryChartData.datasets[0].data.push(currMetric[1]);

          console.log("Curr Chart Data: ", currHistoryChartData);
          setHistoryChartData(currHistoryChartData);
          setRenderHistoryChart(true);
        });
      });
  }, [historyMetrics]);

  useEffect(() => {
    setRenderNutritionChart(false);
    let currNutritionChartData = {
      labels: [],
      datasets: [
        {
          label: nutritionMetrics,
          data: [],
        },
      ],
    };

    axios
      .post(getMetricsForGraph, {
        userid: localStorage.getItem("uid"),
        key: nutritionMetrics,
      })
      .then((res) => {
        console.log("Nutrition Metrics Data: ", res.data);

        res.data.forEach((currMetric) => {
          currNutritionChartData.labels.push(currMetric[0]);
          currNutritionChartData.datasets[0].data.push(currMetric[1]);

          console.log("Curr Chart Data: ", currNutritionChartData);
          setNutritionChartData(currNutritionChartData);
          setRenderNutritionChart(true);
        });
      });
  }, [nutritionMetrics]);

  const handleAddNutrition = (newNutrition, newMetrics) => {
    console.log("Add Nutrition");
  };

  return (
    <div className="stacked">
      <div className="history__page-layout bg-1">
        <div className="user-history__wrapper">
          <div className="user-history-title">
            <h1>MY HISTORY</h1>
          </div>
          <div>
            {history &&
              history.map((historyItem, index) => (
                <HistoryItem historyItem={historyItem} key={index} />
              ))}
          </div>
        </div>
        <div className="user-history__wrapper">
          <select onChange={(e) => setHistoryMetrics(e.target.value)}>
            <option value="exlevel">Exercise Difficulty</option>
            <option value="extype">Exercise Type</option>
            <option value="bodypart">Body Part</option>
            <option value="equipment">Equipment</option>
          </select>
          {renderHistoryChart && <Doughnut data={historyHistoryChartData} />}
        </div>
      </div>
      <div className="history__page-layout bg-1">
        <div className="user-history__wrapper">
          <div className="user-history-title">
            <h1>MY NUTRITION</h1>
            <AddNutrition handleAddNutrition={handleAddNutrition} />
          </div>
          <div>
            {nutrition &&
              nutrition.map((nutritionItem, index) => (
                <NutritionItem nutritionItem={nutritionItem} key={index} />
              ))}
          </div>
        </div>
        <div className="user-history__wrapper">
          <select onChange={(e) => setNutritionMetrics(e.target.value)}>
            <option value="body_weight">Body Weight</option>
            <option value="bicep_measurement">Bicep Measurement</option>
            <option value="hip_measurement">Hip Measurement</option>
            <option value="waist_measurement">Waist Measurement</option>
            <option value="chest_measurement">Chest Measurement</option>
          </select>
          {renderNutritionChart && <Line data={nutritionChartData} />}
        </div>
      </div>
    </div>
  );
}
