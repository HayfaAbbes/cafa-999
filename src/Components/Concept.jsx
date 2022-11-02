
import { Col, Image, Row } from "react-bootstrap";
import bgConcept from "../img/conceptpagebg.png";
import phConept from "../img/conceptphoto.png";
import Header from "./Header";
const Concept = () => {
  return (
    <div
      className="pagecontainer"
      style={{
        backgroundImage: `url(${bgConcept})`,
        backgroundSize: "100%",
        backgroundRepeat: "none",
      }}
    >
      <Header />
      {
      <Row>
        <Col xs={1} md={1}>
      </Col>
        <Col xs={6} md={4}>
          <Image className="img_cpt" src={phConept}/>
      </Col>
      <Col xs={9} md={5}>
      <h1 className="h1_home">tincidunt <br />dolore magna</h1>
       <p className="p_concept">Alain Ducasse celebrates high standards and sophistication, steeped in 
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

export default Concept;
