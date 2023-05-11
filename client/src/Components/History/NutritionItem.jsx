import React, { useState, useEffect } from "react";

import "./styles.css";

export default function NutritionItem({ nutritionItem }) {
  const [showNutritionEntries, setShowNutritionEntries] = useState(false);

  return (
    <div className="history-item__wrapper bg-2">
      <div>
        <h1>DATE: {nutritionItem.date}</h1>
        <button onClick={() => setShowNutritionEntries(!showNutritionEntries)}>
          View
        </button>
        {showNutritionEntries && (
          <div className="popup__routine-item__wrapper">
            <div className="popup__routine-item__body">
              <div className="popup__routine-item-header">
                <div className="flex-column">
                  <h1>DATE: {nutritionItem.date}</h1>
                </div>
                <button
                  className="button-1"
                  onClick={() => setShowNutritionEntries(!showNutritionEntries)}
                >
                  Close
                </button>
              </div>
              <div className="popup__routine-item-exercises">
                {nutritionItem.entries &&
                  nutritionItem.entries.map((entry, index) => (
                    <div key={index}>
                      <div className="flex-column">
                        <h3>Body Weight: {entry.bodyWeight}</h3>
                        <h3>Bicep Measurement: {entry.bicepMeasurement}</h3>
                        <h3>Hip Measurement: {entry.hipMeasurement}</h3>
                        <h3>Waist Measurement: {entry.waistMeasurement}</h3>
                        <h3>Chest Measurement: {entry.chestMeasurement}</h3>
                        <h3>Water Intake: {entry.waterIntake}</h3>
                        <h3>Protein: {entry.protein}</h3>
                        <h3>Calories: {entry.calories}</h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
