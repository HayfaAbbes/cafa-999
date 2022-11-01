import React from "react";
import Headerwhite from "./Headerwhite";
import bgConcept from "../img/conceptpagebg.png";
import { Col, Container, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import Map from "./Map";
import Footer from "./Footer";



const googleMapsApiKey = "AIzaSyBl2oJaWVIAGrzYmMPeHSm0IQnwVm0WXMU";

const modalMapStyles = [
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#e0efef"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        hue: "#1900ff"
      },
      {
        color: "#c0e8e8"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        lightness: 50
      },
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on"
      },
      {
        lightness: 100
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#7dcdcd"
      }
    ]
  }
];

const Contact = () => {
  return(
    <>
   
    <div
    className="pagecontainer"
    style={{
      backgroundImage: `url(${bgConcept})`,
      backgroundSize: "100%",
      backgroundRepeat: "none",
    }}
  >
    <Headerwhite />
    
    {
      <Container>
    <Row>
         <Col xs={1} md={1}>
      </Col>
      <Col>

       <h1 className="h1_white" expand="lg">
       CONTact US
       
        </h1>
          
        
        </Col>
     </Row>
     
      <Row> 
       <Col className="p_white">Phone: +974 555 666</Col>
       </Row>
       <Row>
       <Col className="p_white">Email: cafe#999@gmail.com</Col>
     </Row>
     <Row>
       <Col className="p_white">PR: Maria Luisa Bernabe | mbernabe@qm.org.qa</Col>
     </Row>
     <Row> 
       <Col className="p_white">Find us : Mohammed Bin Thani St,Fire Station , Doha Qatar</Col>
     </Row>
    
   </Container>
   
      }
    
    </div>
     <Footer/>
   
     </>
   
  );
};

export default Contact;
