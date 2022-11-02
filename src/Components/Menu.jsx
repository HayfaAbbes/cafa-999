import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import bgCuisine from "../img/cuisinebg-03.png";
import Headerwhite from "./Headerwhite";
import phcuisine1 from "../img/cuisineimg1-01.png";
import phcuisine2 from "../img/cuisineimg2-01.png";
import phcuisine3 from "../img/cuisineimg03-01.png";
import phcuisine4 from "../img/cuisineimg04-01-01.png";
import {useState} from 'react';
import {PrimiPlatti} from "../data";
import {MainCourse} from "../data";
import {Salad} from "../data";
import {Starter} from "../data";
import {Drink} from "../data";
const Menu = () => {
  const [Primi, setPrimi] = useState(PrimiPlatti)
  const [MainCour, setMainCourse] = useState(MainCourse)
  const [Sld, setSalad] = useState(Salad)
  const [Str, setStarter] = useState(Starter)
  const [Drk,setDrink] = useState(Drink);
  return (
    <div
      className="pagecontainer"
      style={{
        backgroundImage: `url(${bgCuisine})`,
        backgroundSize: "100%",
        backgroundRepeat: "none",
      }}
    >        
      <Headerwhite />
      {
      <Row>
        <Col xs={1} md={1}>
          </Col>
        <Col xs={6} md={4}>
          <Image className="img_concept"   style={{  padding: 3}} src={phcuisine1}/>
          <Image   className="img_cuisine"  style={{  padding: 3}} src={phcuisine2}/>
          <Image   className="img_cuisine"  style={{  padding: 3}} src={phcuisine3}/>
          <Image   className="img_cuisine"  style={{  padding: 3}} src={phcuisine4}/>
      </Col>
      <Col xs={9} md={5}>
      <h1 className="h1_white">THE MENU</h1>
       <h5 className="h5_white" h5_white>PRIMI PIATTI</h5>
       {Primi.map((el, i) => (
           <tr>
           <td ><h5 className="td_white">{el.title}</h5> </td>
           <td><h5 className="td_white">{el.price}</h5></td>
       </tr>
      ))}
      <h5 className="h5_white" h5_white>MAIN COURSE</h5>
       {MainCour.map((el, i) => (
           <tr>
           <td ><h5 className="td_white">{el.title}</h5> </td>
           <td><h5 className="td_white">{el.price}</h5></td>
       </tr>
      ))}
       <h5 className="h5_white" h5_white>SALAD</h5>
       {Sld.map((el, i) => (
           <tr>
           <td ><h5 className="td_white">{el.title}</h5> </td>
           <td><h5 className="td_white">{el.price}</h5></td>
       </tr>
      ))}
        <h5 className="h5_white" h5_white>STARTERS</h5>
       {Str.map((el, i) => (
           <tr>
           <td ><h5 className="td_white">{el.title}</h5> </td>
           <td><h5 className="td_white">{el.price}</h5></td>
       </tr>
      ))}
      <h5 className="h5_white" h5_white>DRINKS</h5>
       {Drk.map((el, i) => (
           <tr>
           <td ><h5 className="td_white">{el.title}</h5> </td>
           <td><h5 className="td_white">{el.price}</h5></td>
       </tr>
      ))}
      </Col>
      </Row>
      }
    
    </div>
  );
};
export default Menu;
