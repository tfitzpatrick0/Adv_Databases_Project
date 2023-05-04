import React from "react";

import "./styles.css";

export default function SearchForm({
  onKeywordChange,
  onExtypeChange,
  onBodypartChange,
  onEquipmentChange,
  onDifficultyChange,
  onSearchHandler,
  onResetHandler,
}) {
  const options = {
    extype: [
      "Plyometrics",
      "Cardio",
      "Olympic Weightlifting",
      "Stretching",
      "Powerlifting",
      "Strongman",
      "Strength",
    ],
    bodypart: [
      "Forearms",
      "Middle Back",
      "Neck",
      "Triceps",
      "Biceps",
      "Hamstrings",
      "Traps",
      "Chest",
      "Glutes",
      "Lower Back",
      "Quadriceps",
      "Shoulders",
      "Adductors",
      "Abductors",
      "Abdominals",
      "Lats",
      "Calves",
    ],
    equipment: [
      "Dumbbell",
      "Body Only",
      "None",
      "E-Z Curl Bar",
      "Barbell",
      "Kettlebells",
      "Bands",
      "Other",
      "Machine",
      "Foam Roll",
      "Medicine Ball",
      "Exercise Ball",
      "Cable",
    ],
    difficulty: ["Expert", "Intermediate", "Beginner"],
  };

  return (
    <form>
      <div className="inner-form">
        <div className="basic-search">
          <div className="input-field">
            <input
              id="search"
              type="text"
              placeholder="Search..."
              onChange={onKeywordChange}
            />
          </div>
        </div>
        <div className="advance-search">
          <span className="desc">ADVANCED SEARCH</span>
          <div className="row">
            <div className="input-field">
              <div className="input-select">
                Exercise Type
                <select name="choices-single-default" onChange={onExtypeChange}>
                  <option></option>
                  {options.extype.map((option, index) => (
                    <option value={option} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="input-select">
                Body Part
                <select
                  name="choices-single-default"
                  onChange={onBodypartChange}
                >
                  <option></option>
                  {options.bodypart.map((option, index) => (
                    <option value={option} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="row second">
            <div className="input-field">
              <div className="input-select">
                Equipment
                <select
                  name="choices-single-default"
                  onChange={onEquipmentChange}
                >
                  <option></option>
                  {options.equipment.map((option, index) => (
                    <option value={option} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="input-select">
                Difficulty
                <select
                  name="choices-single-default"
                  onChange={onDifficultyChange}
                >
                  <option></option>
                  {options.difficulty.map((option, index) => (
                    <option value={option} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="row third">
            <div className="input-field">
              <div className="result-count">
                <span>108 </span>results
              </div>
              <div className="group-btn">
                <button
                  type="reset"
                  className="btn-delete"
                  onClick={onResetHandler}
                >
                  RESET
                </button>
                <button
                  type="button"
                  className="btn-search"
                  onClick={onSearchHandler}
                >
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
