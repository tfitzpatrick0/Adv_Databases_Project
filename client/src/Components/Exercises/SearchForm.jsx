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
            {/* <div class="icon-wrap">
              <svg
                class="svg-inline--fa fa-search fa-w-16"
                fill="#ccc"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </div> */}
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
