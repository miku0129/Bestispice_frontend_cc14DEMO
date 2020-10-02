import React, { useState, useEffect } from "react";
import "../style/Form.css";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";

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

  //update name
  //get id
  const [readyUpdateId, setReadyUpdateId] = useState("");
  function toReadyUpdateId(e) {
    setReadyUpdateId(e.target.value);
  }
  console.log(readyUpdateId);
  //get name
  const [readyUpdateName, setReadyUpdateName] = useState("");
  function toReadyUpdateName(e) {
    setReadyUpdateName(e.target.value);
  }
  console.log(readyUpdateName);
  //set update name with given id and name
  const [updateMessage, setUpdateData] = useState("");
  async function toUpdate() {
    let http =
      "http://localhost:5000/api/v1/restaurants/" +
      readyUpdateId +
      "/" +
      readyUpdateName;
    let req = axios.put(http);
    let res = await req;
    let data = res.data;
    console.log(data);
    setUpdateData(data.message);
  }

  //post new restaurant
  //name
  const [addInfoName, setInfoName] = useState("");
  function toAddInfoName(e) {
    setInfoName(e.target.value);
  }
  console.log(addInfoName);
  //feature
  const [addInfoFeat, setInfoFeat] = useState("");
  function toAddInfoFeat(e) {
    setInfoFeat(e.target.value);
  }
  console.log(addInfoFeat);
  //tell
  const [addInfoTell, setInfoTell] = useState("");
  function toAddInfoTell(e) {
    setInfoTell(e.target.value);
  }
  console.log(addInfoTell);
  //business hour1
  const [addInfoHour1, setInfoHour1] = useState("");
  function toAddInfoHour1(e) {
    setInfoHour1(e.target.value);
  }
  console.log(addInfoHour1);
  //business hour2
  const [addInfoHour2, setInfoHour2] = useState("");
  function toAddInfoHour2(e) {
    setInfoHour2(e.target.value);
  }
  console.log(addInfoHour2);
  //regular holiday
  const [addInfoHoliday, setInfoHoliday] = useState("");
  function toAddInfoHoliday(e) {
    setInfoHoliday(e.target.value);
  }
  console.log(addInfoHoliday);
  //place
  const [addInfoPlace, setInfoPlace] = useState("");
  function toAddInfoPlace(e) {
    setInfoPlace(e.target.value);
  }
  console.log(addInfoPlace);
  //url
  const [addInfoUrl, setInfoUrl] = useState("");
  function toAddInfoUrl(e) {
    setInfoUrl(e.target.value);
  }
  console.log(addInfoUrl);

  const [updatedMessage, setUpdateMessage] = useState("");
  async function toAdd() {
    // const params = new URLSearchParams();

    console.log("I'm in toAdd");
    // params.append("name", "miku");

    let req = axios.post("http://localhost:5000/api/v1/restaurants/", {
      name: addInfoName,
      feature: addInfoFeat,
      tell: addInfoTell,
      business_hours1: addInfoHour1,
      business_hours2: addInfoHour2,
      regular_holiday: addInfoHoliday,
      place: addInfoPlace,
      url: addInfoUrl,
    });
    let res = await req;
    let result = res.data;
    console.log("result", result);
    console.log("hello");
    setUpdateMessage(result.message);
  }
  console.log(updatedMessage);

  return (
    <div>
      <div className="container">
        <h2>Add new restaurant</h2>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={toAddInfoName}
            />
          </Form.Group>
          <Form.Group controlId="formFeature">
            <Form.Label>Feature</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter feature"
              onChange={toAddInfoFeat}
            />
          </Form.Group>
          <Form.Group controlId="formTell">
            <Form.Label>Tell</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter tell"
              onChange={toAddInfoTell}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="formHour1">
                <Form.Label>Business Hours1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter bussiness hour"
                  onChange={toAddInfoHour1}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formHour2">
                <Form.Label>Business Hours2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter evening business hour"
                  onChange={toAddInfoHour2}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formHoriday">
            <Form.Label>Regular Holiday</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter regular holiday"
              onChange={toAddInfoHoliday}
            />
          </Form.Group>
          <Form.Group controlId="formPlace">
            <Form.Label>Place</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Place"
              onChange={toAddInfoPlace}
            />
          </Form.Group>
          <Form.Group controlId="formUrl">
            <Form.Label>URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter URL"
              onChange={toAddInfoUrl}
            />
          </Form.Group>
          <Form.Text>{updatedMessage}</Form.Text>
        </Form>
        <Button variant="success" type="submit" onClick={toAdd}>
          add
        </Button>
      </div>
      {/* <div className="edit_restaurant_info container">
        <h2>edit restaurant data</h2>
        <ul className="add_informaton_form">
          <form class="edit_form">
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
                  name="add"
                  class="textfield"
                  placeholder="restaurant name?"
                  onChange={toAddInfoName}
                ></input>
              </label>
            </li>
            <li>
              <label>
                <span>feature</span>
                <input
                  type="text"
                  name="add"
                  class="textfield"
                  placeholder="restaurant feature?"
                  onChange={toAddInfoFeat}
                ></input>
              </label>
            </li>
            <li>
              <label>
                <span>tell</span>
                <input
                  type="text"
                  name="add"
                  class="textfield"
                  placeholder="restaurant tell?"
                  onChange={toAddInfoTell}
                ></input>
              </label>
            </li>
            <li>
              <label>
                <span>business hours1</span>
                <input
                  type="text"
                  name="add"
                  class="textfield"
                  placeholder="business hours?"
                  onChange={toAddInfoHour1}
                ></input>
              </label>
            </li>
            <li>
              <label>
                <span>business hours2</span>
                <input
                  type="text"
                  name="add"
                  class="textfield"
                  placeholder="evening business hours?"
                  onChange={toAddInfoHour2}
                ></input>
              </label>
            </li>
            <li>
              <label>
                <span>regular holiday</span>
                <input
                  type="text"
                  name="add"
                  class="textfield"
                  placeholder="regular holiday?"
                  onChange={toAddInfoHoliday}
                ></input>
              </label>
            </li>
            <li>
              <label>
                <span>place</span>
                <input
                  type="text"
                  name="add"
                  class="textfield"
                  placeholder="place?"
                  onChange={toAddInfoPlace}
                ></input>
              </label>
            </li>
            <li>
              <label>
                <span>url</span>
                <input
                  type="text"
                  name="add"
                  class="textfield"
                  placeholder="url?"
                  onChange={toAddInfoUrl}
                ></input>
              </label>
            </li>
          </form>
          <li>
            <label>
              <button id="add_info" onClick={toAdd}>
                add
              </button>
            </label>
          </li>
        </ul>
      </div> */}
      <div className="container">
        <div className="box">
          <Form>
            <Form.Group controlId="formUpdateInfo">
              <Form.Label>Update info</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="restaurant id?"
                    onChange={toReadyUpdateId}
                  ></Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="update name?"
                    onChange={toReadyUpdateName}
                  ></Form.Control>
                </Col>
              </Row>

              <Form.Text>{updateMessage}</Form.Text>
            </Form.Group>
            {/* <Button variant="info" type="submit" onClick={toDelete}>
          delete
        </Button> */}
            {/* ボタンがFormの中にあるとつかえない？ */}
          </Form>

          <Button variant="success" type="submit" onClick={toUpdate}>
            update
          </Button>
        </div>
        <p></p>
        <div className="box">
          <Form>
            <Form.Group controlId="formDeleteInfo">
              <Form.Label>Delete info</Form.Label>
              <Form.Control
                type="text"
                placeholder="restaurant id?"
                onChange={toReadyDelete}
              ></Form.Control>
              <Form.Text>{deleteMessage}</Form.Text>
            </Form.Group>
            {/* <Button variant="info" type="submit" onClick={toDelete}>
          delete
        </Button> */}
            {/* ボタンがFormの中にあるとつかえない？ */}
          </Form>
          <Button variant="danger" type="submit" onClick={toDelete}>
            delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default List;
