import React, { useState, useEffect } from "react";
import "../style/List.css";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";

function List() {

  // const [allInfo, setAllInfo] = useState("");

  const [readySingleInfo, setReadySingleInfo] = useState("");
  const [singleInfo, setSingleInfo] = useState("");

  // // get all restaurant info is rendered everytime when this page is rendered 
  // useEffect(() => {
  //   async function getAllInfo() {
  //     let req = axios.get("https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/");
  //     let res = await req;
  //     let data = res.data;
  //     console.log(data);
  //     let temp = [];
  //     for (let key in data) {
  //       console.log(data[key]);
  //       temp.push(data[key]);
  //     }
  //     console.log(temp);
  //     setAllInfo(
  //       temp.map((el) => {
  //         return (
  //           <ul key={el[1]}>
  //             <li>ID: {el[1]}, Name: {el[0]}, Feature: {el[3]}</li>
  //           </ul>
  //         );
  //       })
  //     );
  //   }
  //   getAllInfo()
  // } ,[])

  //get id from placeholder
  function toReadySingleInfo(e) {
    setReadySingleInfo(e.target.value);
  }
  // console.log(readySingleInfo);
  //back single restaurant info when click button
  async function toGetSingleInfo() {
    // const http = "https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/" + readySingleInfo;
    // const req = axios.get(http);
    // const http = "https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/" + readySingleInfo;
    // const req = axios.get(`https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/${readySingleInfo}`);

    // const res = await req;
    // const data = res.data;
    // console.log(data);
    // let temp = [];
    // for (let key in data) {
    //   temp.push(data[key]);
    // }
    console.log("hello");
    setSingleInfo(
      // <Card style={{ width: "18rem" }}>
      //   <Card.Body>
      //     <Card.Title>{temp[3]}</Card.Title>
      //     <Card.Subtitle>{temp[2]}</Card.Subtitle>
      //     <ul>
      //       <li>place: {temp[4]}</li>
      //       <li>business hour: {temp[0]}</li>
      //       <li>business hour(evening): {temp[1]}</li>
      //       <li>regular holiday: {temp[5]}</li>
      //       <li>TELL: {temp[6]}</li>
      //       <li>URL: {temp[7]}</li>
      //     </ul>
      //   </Card.Body>
      // </Card>
    );
  }

  return (
    // form tag の中になくとも、挟まれているだけでボタンは機能しなくなってしまうことを発見した。
    <div className="container">
      <h2>hello miku</h2>
      {/* <h2>Get restaurant info</h2>
      <div className="box">
        <Form>
          <Form.Group controlId="formGetAllInfo">
            <Form.Label>Get all names</Form.Label>
            <div>{allInfo}</div>
          </Form.Group>
        </Form>
      </div>
      <p></p> */}
       {/* <div className="box">
         <Form>
           <Form.Group controlId="formGetSingleInfo">
             <Form.Label>Get single restaurant</Form.Label>
             <Form.Control
              type="text"
              placeholder="restaurant id?"
              onChange={toReadySingleInfo}
            ></Form.Control>
          </Form.Group> */}
          {/* ボタンがFormのタグの中にあるとつかえない？ */}
        {/* </Form> */}
        {/* <Button variant="info" type="submit" onClick={toGetSingleInfo}>
          single
        </Button> */}
      {/* </div> */}
      <div className="card_base">
        <div>{singleInfo}</div>
      </div>
    </div>
  );
}

export default List;
