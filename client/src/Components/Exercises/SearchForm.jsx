import React from "react";

import "./styles.css";

export default function SearchForm() {
  return (
    // <div className="search-bar__wrapper">
    //   <input type="text" placeholder="Search..." />
    //   <button className="button-1">Body Part</button>
    //   <button className="button-1">Difficulty</button>
    //   <button className="button-1">Filter 3</button>
    //   <button className="button-1">Filter 4</button>
    //   <button className="button-1">Filter 5</button>
    // </div>
    <form>
      <div className="inner-form">
        <div className="basic-search">
          <div className="input-field">
            <input id="search" type="text" placeholder="Type Keywords" />
          </div>
        </div>
        <div className="advance-search">
          <span className="desc">ADVANCED SEARCH</span>
          <div className="row">
            <div className="input-field">
              <div className="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="" value="">
                    Accessories
                  </option>
                  <option>Subject b</option>
                  <option>Subject c</option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="" value="">
                    Color
                  </option>
                  <option>Subject b</option>
                  <option>Subject c</option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="" value="">
                    Size
                  </option>
                  <option>Subject b</option>
                  <option>Subject c</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row second">
            <div className="input-field">
              <div className="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="" value="">
                    Sale
                  </option>
                  <option>Subject b</option>
                  <option>Subject c</option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="" value="">
                    Time
                  </option>
                  <option>Last time</option>
                  <option>Today</option>
                  <option>This week</option>
                  <option>This month</option>
                  <option>This year</option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="" value="">
                    Type
                  </option>
                  <option>Subject b</option>
                  <option>Subject c</option>
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
                <button className="btn-delete" id="delete">
                  RESET
                </button>
                <button className="btn-search">SEARCH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
