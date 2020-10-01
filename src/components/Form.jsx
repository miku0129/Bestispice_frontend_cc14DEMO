import React, { useState, useEffect } from "react";
import "../style/Form.css";
import axios from "axios";

//Form
function List() {
  //delete
  const [readyDelete, setReadyDelete] = useState("");
  function toReadyDelete(e) {
    console.log(e.target.value);
    setReadyDelete(e.target.value);
  }
  const [deleteMessage, setDeleteMessage] = useState("");
  async function toDelete() {
    console.log(readyDelete);
    let http = "http://localhost:5000/api/v1/restaurants/" + readyDelete;
    let req = axios.delete(http);
    let res = await req;
    let data = res.data;
    console.log(data);
    setDeleteMessage(data.message);
  }

  return (
    <div>
      <form class="edit_form">
        <h2>edit restaurant data</h2>
        <ul>
          <li>
            <label>
              <span>add new restaurant</span>
            </label>
          </li>
          <li>
            <label>
              <span>restaurant name</span>
              <input
                type="text"
                name="update"
                class="textfield"
                placeholder="restaurant info?"
              ></input>
            </label>
          </li>
          <li>
            <label>
              <span>feature</span>
              <input
                type="text"
                name="update"
                class="textfield"
                placeholder="restaurant feature?"
              ></input>
            </label>
          </li>
          <li>
            <label>
              <span>tell</span>
              <input
                type="text"
                name="update"
                class="textfield"
                placeholder="restaurant feature?"
              ></input>
            </label>
          </li>
          <li>
            <label>
              <span>business hours1</span>
              <input
                type="text"
                name="update"
                class="textfield"
                placeholder="business hours?"
              ></input>
            </label>
          </li>
          <li>
            <label>
              <span>business hours2</span>
              <input
                type="text"
                name="update"
                class="textfield"
                placeholder="evening business hours?"
              ></input>
            </label>
          </li>
          <li>
            <label>
              <span>regular holiday</span>
              <input
                type="text"
                name="update"
                class="textfield"
                placeholder="regular holiday?"
              ></input>
            </label>
          </li>
          <li>
            <label>
              <span>place</span>
              <input
                type="text"
                name="update"
                class="textfield"
                placeholder="place?"
              ></input>
            </label>
          </li>
          <li>
            <label>
              <span>url</span>
              <input
                type="text"
                name="update"
                class="textfield"
                placeholder="url?"
              ></input>
            </label>
          </li>
          <li>
            <label>
              <button id="add_info">add</button>
            </label>
          </li>
        </ul>
      </form>
      <ul>
        <li>
          <label>
            <span>update restaurant name</span>
            <input
              type="text"
              name="update"
              class="textfield"
              placeholder="restaurant name?"
            ></input>
          </label>
          <li>
            <label>
              <button id="update_info">update</button>
            </label>
          </li>
        </li>
      </ul>
      <ul>
        <li>
          <label>
            <span>delete restaurant info</span>
            <input
              type="text"
              name="update"
              class="textfield"
              placeholder="restaurant id?"
              onChange={toReadyDelete}
            ></input>
          </label>
        </li>
        <li>
          <label>
            <button id="delete_info" onClick={toDelete}>
              delete
            </button>
          </label>
        </li>
        <li>{deleteMessage}</li>
      </ul>
    </div>
  );
}

export default List;
