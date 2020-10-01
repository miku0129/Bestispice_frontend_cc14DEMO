import React, { useState, useEffect } from "react";
import "../style/List.css";
import axios from "axios";

//list restaruant names
function List() {
  //get all restaurant info
  //more readable □
  const [allInfo, setAllInfo] = useState("");
  async function getAllInfo() {
    let http = "http://localhost:5000/api/v1/restaurants/";
    let req = axios.get(http);
    let res = await req;
    let data = res.data;
    console.log(data);
    let temp = [];
    for (let key in data) {
      console.log(data[key]);
      temp.push(data[key]);
    }
    console.log(temp);
    setAllInfo(
      temp.map((el) => {
        return (
          <ul>
            <li>id:{el[1]}</li>
            <li>name:{el[0]}</li>
            <li>feature:{el[3]}</li>
          </ul>
        );
      })
    );
  }

  //get id from placeholder
  const [readySingleInfo, setReadySingleInfo] = useState("");
  function toReadySingleInfo(e) {
    setReadySingleInfo(e.target.value);
  }
  console.log(readySingleInfo);
  //back single restaurant info when click button
  const [singleInfo, setSingleInfo] = useState("");
  async function toGetSingleInfo() {
    const http = "http://localhost:5000/api/v1/restaurants/" + readySingleInfo;
    const req = axios.get(http);
    const res = await req;
    const data = res.data;
    console.log(data);
    let temp = [];
    for (let key in data) {
      temp.push(data[key]);
    }
    console.log(temp);
    setSingleInfo(
      <ul>
        <li>name: {temp[3]}</li>
        <li>feature: {temp[2]}</li>
        <li>place: {temp[4]}</li>
        <li>business hour: {temp[0]}</li>
        <li>business hour(evening): {temp[1]}</li>
        <li>regular holiday: {temp[5]}</li>
        <li>TELL: {temp[6]}</li>
        <li>URL: {temp[7]}</li>
      </ul>
    );
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
              onChange={toReadySingleInfo}
            ></input>
            <button id="get_single_restaurant" onClick={toGetSingleInfo}>
              signle
            </button>
          </label>
        </li>
      </ul>
      <div className="card_base">
        <p>all info</p>
        <div className="card">{allInfo}</div>
        <p>single info</p>
        <div className="card">{singleInfo}</div>
      </div>
    </div>
  );
}

export default List;
