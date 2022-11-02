import React from "react";
import Headerwhite from "./Headerwhite";
import bgContact from "../img/contactbg-05.png";
import { Col, Container, Row } from "react-bootstrap";
const Contact = () => {
  return(
    <div
    className="pagecontainer"
    style={{
      backgroundImage: `url(${bgContact})`,
      backgroundSize: "50%",
     
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
      <Row > 
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
  );
};

export default Contact;
