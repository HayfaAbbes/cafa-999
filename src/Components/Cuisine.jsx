import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import bgCuisine from "../img/cuisinebg-03.png";
import Headerwhite from "./Headerwhite";
import phcuisine1 from "../img/cuisineimg1-01.png";
import phcuisine2 from "../img/cuisineimg2-01.png";
import phcuisine3 from "../img/cuisineimg03-01.png";
import phcuisine4 from "../img/cuisineimg04-01-01.png";
import { useNavigate} from 'react-router-dom';
const Cuisine = () => {
  const navigate = useNavigate();
  const navigateToMenu = () => {
    //  navigate to /Menu
    navigate('/menu');
  };
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
      <h1 className="h1_white">tincidunT <br /> dolore magna</h1>
       <p className="p_white">Alain Ducasse celebrates high standards and sophistication, steeped in 
         the Islamic golden age. Prepare to embark on a journey of discovery, 
         as you sample contemporary Mediterranean cuisine with a twist of 
         eclectic Arabian flavours.<br />Your surroundings will also take you to new heights. Located at the top 
         floor of the iconic Museum of Islamic Art, IDAM’s exquisite design was 
         created by Phillipe Starck who has fused modernity with classicism to 
         offer a dynamic environment with Arabian touches.</p>
       <button class=" button_pink rounded-lg"  variant="secondary" onClick={navigateToMenu}>DISCOVER OUR MEN</button>
      </Col>
      </Row>      
      }
    </div>
  );
};
export default Cuisine;
