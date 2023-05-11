import React, { useState } from "react";

import "./styles.css";

export default function AddNutrition({ handleAddNutrition }) {
  const [showAddNutrition, setShowAddNutrition] = useState(false);
  const [newNutrition, setNewNutrition] = useState({
    water: "",
    proteins: "",
    cals: "",
  });
  const [newMetrics, setNewMetrics] = useState({
    bodyweight: "",
    bicep: "",
    hip: "",
    waist: "",
    chest: "",
  });

  const handleNutritionOnChange = (e) => {
    e.preventDefault();

    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewNutrition({ ...newNutrition, [name]: newValue });
  };

  const handleMetricsOnChange = (e) => {
    e.preventDefault();

    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewMetrics({ ...newMetrics, [name]: newValue });
  };

  return (
    <>
      <button
        className="button-1"
        onClick={() => setShowAddNutrition(!showAddNutrition)}
      >
        Add Metrics and Nutrition
      </button>
      {showAddNutrition && (
        <div className="popup__routine-item__wrapper">
          <div className="popup__routine-item__body">
            <div className="popup__routine-item-header">
              <h1>Log Your Metrics and Nutrition</h1>
              <div>
                <button
                  className="button-1"
                  onClick={() => {
                    handleAddNutrition(newNutrition, newMetrics);
                    setShowAddNutrition(!showAddNutrition);
                  }}
                >
                  Log Nutrition
                </button>
                <button
                  className="button-1"
                  onClick={() => setShowAddNutrition(!showAddNutrition)}
                >
                  Close
                </button>
              </div>
            </div>
            <div>
              <input
                type="text"
                value={newNutrition.water}
                name="water"
                placeholder="Water Intake"
                onChange={handleNutritionOnChange}
              />
              <input
                type="text"
                value={newNutrition.proteins}
                name="proteins"
                placeholder="Protein"
                onChange={handleNutritionOnChange}
              />
              <input
                type="text"
                value={newNutrition.cals}
                name="cals"
                placeholder="Calories"
                onChange={handleNutritionOnChange}
              />
              <input
                type="text"
                value={newMetrics.bodyweight}
                name="bodyweight"
                placeholder="Bodyweight"
                onChange={handleMetricsOnChange}
              />
              <input
                type="text"
                value={newMetrics.bicep}
                name="bicep"
                placeholder="Bicep Size"
                onChange={handleMetricsOnChange}
              />
              <input
                type="text"
                value={newMetrics.hip}
                name="hip"
                placeholder="Hip Size"
                onChange={handleMetricsOnChange}
              />
              <input
                type="text"
                value={newMetrics.waist}
                name="waist"
                placeholder="Waist Size"
                onChange={handleMetricsOnChange}
              />
              <input
                type="text"
                value={newMetrics.chest}
                name="chest"
                placeholder="Chest Size"
                onChange={handleMetricsOnChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
