import React, { useState, useEffect } from "react";
// import "../style/Form.css";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import useReactRouter from "use-react-router";  


function List() {

  const { history, location, match } = useReactRouter(); 

  //delete 
  const [deleteId, setDeleteId] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");

  async function toDelete() {
    let res = await axios.delete(`https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/${deleteId}`);
    let data = res.data;
    console.log(data);
    setDeleteMessage(data.message);
  }

  //update name
  //get id
  // const [readyUpdateId, setReadyUpdateId] = useState("");
  // function toReadyUpdateId(e) {
  //   setReadyUpdateId(e.target.value);
  // }
  // console.log(readyUpdateId);
  //get name
  const [readyUpdateName, setReadyUpdateName] = useState("");
  function toReadyUpdateName(e) {
    setReadyUpdateName(e.target.value);
  }
  // console.log(readyUpdateName);
  //set update name with given id and name
  const [updateMessage, setUpdateData] = useState("");
  // async function toUpdate() {
  //   let http =
  //     "https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/" +
  //     readyUpdateId +
  //     "/" +
  //     readyUpdateName;
  //   let req = axios.put(http);
  //   let res = await req;
  //   let data = res.data;
  //   console.log(data);
  //   setUpdateData(data.message);
  // }


  //post new restaurant
  const [addInfoName, setInfoName] = useState("");
  // console.log(addInfoName);

  //feature
  const [addInfoFeat, setInfoFeat] = useState("");
  // console.log(addInfoFeat);

  //tell
  const [addInfoTell, setInfoTell] = useState("");
  // console.log(addInfoTell);

  //business hour1
  const [addInfoHour1, setInfoHour1] = useState("");
  // console.log(addInfoHour1);

  //business hour2
  const [addInfoHour2, setInfoHour2] = useState("");
  // console.log(addInfoHour2);

  //regular holiday
  const [addInfoHoliday, setInfoHoliday] = useState("");
  // console.log(addInfoHoliday);

  //place
  const [addInfoPlace, setInfoPlace] = useState("");
  // console.log(addInfoPlace);

  //url
  const [addInfoUrl, setInfoUrl] = useState("");
  // console.log(addInfoUrl);

  //comment
  const [addInfoComment, setInfoComment] = useState("");
  // console.log(addInfoComment);

  const [updatedMessage, setUpdateMessage] = useState("");

  async function addNewPost() {

    let req = axios.post("https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/", {
      name: addInfoName,
      feature: addInfoFeat,
      tell: addInfoTell,
      business_hours1: addInfoHour1,
      business_hours2: addInfoHour2,
      regular_holiday: addInfoHoliday,
      place: addInfoPlace,
      url: addInfoUrl,
      comments: addInfoComment
    });
    let res = await req;
    let result = res.data;
    console.log("result", result);
    console.log("hello");
    setUpdateMessage(result.message);
  }
  // console.log(updatedMessage);

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
              onChange={e=>{setInfoName(e.target.value)}}
            />
          </Form.Group>
          <Form.Group controlId="formFeature">
            <Form.Label>Feature</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter feature"
              onChange={e=>{setInfoFeat(e.target.value)}}
            />
          </Form.Group>
          <Form.Group controlId="formTell">
            <Form.Label>Tell</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter tell"
              onChange={e=>{setInfoTell(e.target.value)}}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId="formHour1">
                <Form.Label>Business Hours1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter bussiness hour"
                  onChange={e=>{setInfoHour1(e.target.value)}}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formHour2">
                <Form.Label>Business Hours2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter evening business hour"
                  onChange={e=>{setInfoHour2(e.target.value)}}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formHoriday">
            <Form.Label>Regular Holiday</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter regular holiday"
              onChange={e=>{setInfoHoliday(e.target.value)}}
            />
          </Form.Group>
          <Form.Group controlId="formPlace">
            <Form.Label>Place</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Place"
              onChange={e=>{setInfoPlace(e.target.value)}}
            />
          </Form.Group>
          <Form.Group controlId="formUrl">
            <Form.Label>URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter URL"
              onChange={e=>{setInfoUrl(e.target.value)}}
            />
          </Form.Group>
          <Form.Group controlId="formComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Comment?"
              onChange={e=>{setInfoComment(e.target.value)}}
            />
          </Form.Group>

          <Form.Text>{updatedMessage}</Form.Text>
        </Form>
        <Button variant="success" type="submit" onClick={addNewPost}>
          add
        </Button>
      </div>
      <div className="container">
        <h2>Edit restaurant infomation</h2>

        <div className="box">
          <Form>
            <Form.Group controlId="formUpdateInfo">
              <Form.Label>Update info</Form.Label>

              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="restaurant id?"
                    // onChange={toReadyUpdateId}
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

          <Button variant="success" type="submit" >
            update
          </Button>
        </div>

        <div className="box">
          <Form>
            <Form.Group controlId="formDeleteInfo">
              <Form.Label>Delete info</Form.Label>
              <Form.Control
                type="text"
                placeholder="restaurant id?"
                onChange={(e)=>setDeleteId(e.target.value)}
              ></Form.Control>
              <Form.Text>{deleteMessage}</Form.Text>
            </Form.Group>
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
