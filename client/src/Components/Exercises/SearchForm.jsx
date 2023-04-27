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
      <div class="inner-form">
        <div class="basic-search">
          <div class="input-field">
            <input id="search" type="text" placeholder="Type Keywords" />
          </div>
        </div>
        <div class="advance-search">
          <span class="desc">ADVANCED SEARCH</span>
          <div class="row">
            <div class="input-field">
              <div class="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="" value="">
                    Accessories
                  </option>
                  <option>Subject b</option>
                  <option>Subject c</option>
                </select>
              </div>
            </div>
            <div class="input-field">
              <div class="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="" value="">
                    Color
                  </option>
                  <option>Subject b</option>
                  <option>Subject c</option>
                </select>
              </div>
            </div>
            <div class="input-field">
              <div class="input-select">
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
          <div class="row second">
            <div class="input-field">
              <div class="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="" value="">
                    Sale
                  </option>
                  <option>Subject b</option>
                  <option>Subject c</option>
                </select>
              </div>
            </div>
            <div class="input-field">
              <div class="input-select">
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
            <div class="input-field">
              <div class="input-select">
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
          <div class="row third">
            <div class="input-field">
              <div class="result-count">
                <span>108 </span>results
              </div>
              <div class="group-btn">
                <button class="btn-delete" id="delete">
                  RESET
                </button>
                <button class="btn-search">SEARCH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
