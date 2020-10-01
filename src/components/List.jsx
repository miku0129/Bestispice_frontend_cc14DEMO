import React, { useState, useEffect } from "react";
import "../style/List.css";
import axios from "axios";

//list restaruant names
function List() {
  //get all restaurant info
  const [allInfo, setAllInfo] = useState("");
  async function getAllInfo() {
    let req = axios.get("http://localhost:5000/api/v1/restaurants/");
    let res = await req;
    let data = res.data;
    console.log(JSON.stringify(data));

    setAllInfo(JSON.stringify(data));
  }

  return (
    <div>
      <h2>get restaurant info</h2>
      <ul>
        <li>
          <label>
            <span>get all restaurant info</span>
            <button id="get_all_restaurant" onClick={getAllInfo}>
              all
            </button>
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
        <div className="card">{allInfo}</div>
      </div>
    </div>
  );
}

export default List;
