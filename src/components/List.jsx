import React, { useState, useEffect } from "react";
import "../style/List.css";
import axios from "axios";

//list restaruant names
function List() {
  return (
    <div>
      <h2>get restaurant info</h2>
      <form>
        <ul>
          <li>
            <label>
              <span>get all restaurant info</span>
              <button id="get_all_restaurant">all</button>
            </label>
          </li>
          <li>
            <label>
              <span>get single restaurant info</span>
              <input
                type="text"
                name="get_single_info"
                placeholder="restaurant id?"
              ></input>
              <button id="get_single_restaurant">signle</button>
            </label>
          </li>
        </ul>
        <div className="card_base">
          <div className="card">card</div>
        </div>
      </form>
    </div>
  );
}

export default List;
