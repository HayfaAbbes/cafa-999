import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Header from "./Header";

import bgConcept from "../img/conceptpagebg.png";
import Headerwhite from "./Headerwhite";
import ph1 from "../img/cuisinephoto.png";
import {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./Footer";


const TheTeam = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);};
  return (
  <div
  className="pagecontainer"
  style={{
    backgroundImage: `url(${bgConcept})`,
    backgroundSize: "100%",
    backgroundRepeat: "none",
  }}
>
  <Headerwhite />

  {/* contenu de page houni !! */
  

  <Row>
  <Row xs={6} md={4}></Row>
    <Col xs={6} md={4}>

    <Carousel activeIndex={index} onSelect={handleSelect}>
 
 <Carousel.Item>
   <img 
     className="img_team"
     src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
     alt="cafe_999"   
   />
   
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="img_team"
     src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
     alt="cafe_999"
   />

   
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="img_team"
     src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
     alt="cafe_999"
   />

 
 </Carousel.Item>
</Carousel>
  
  </Col>
  <Col xs={1} md={1}>
  </Col>
  <Col xs={9} md={5}>
  <h1 className="h1_white">tincidunT<br />dolore magna</h1>
   <p className="p_white">Alain Ducasse celebrates high standards and sophistication, steeped in 
the Islamic golden age. Prepare to embark on a journey of discovery, 
as you sample contemporary Mediterranean cuisine with a twist of 
eclectic Arabian flavours.<br />Your surroundings will also take you to new heights. Located at the top 
floor of the iconic Museum of Islamic Art, IDAM’s exquisite design was 
created by Phillipe Starck who has fused modernity with classicism to 
offer a dynamic environment with Arabian touches.</p>
  </Col>
  </Row>


  
  
  
  }
  

</div>
  );
};

export default TheTeam;
