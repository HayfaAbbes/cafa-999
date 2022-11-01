
import bg from "../img/bghomepage.png";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from "react-bootstrap";
const Home = () => {
  return (
    <div
      className="pagecontainer"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100%",
        backgroundRepeat: "none",
      }}
    >
      <Header />

      {
      <Row>
         <Col xs={1} md={1}>
      </Col>
      <Col>

       <h1 className="h1_home" expand="lg">
        sed diam nonummy <br />nibh euismod tincidunt <br /> magna
        </h1>
        <h4 className="h4_home">
        Consectetuer adipiscing elit, sed diam nonummy nibh <br />euismod tincidunt ut laoreet dolore magna aliquam erat
        </h4>
        <button class=" button_home rounded-pill" variant="warning">Button</button>
        </Col>
     </Row>
      }
    </div>
  );
};

export default Home;
