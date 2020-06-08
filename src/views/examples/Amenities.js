
import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

import DemoFooter from "components/Footers/DemoFooter.js";

const Amenities = () => {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("amenities-page");
    return function cleanup() {
      document.body.classList.remove("amenities-page");
    };
  });
  return (
    <>
      <div className="amenities section">
        <div style={{
          backgroundImage: "url(" + require("assets/img/bg.png") + ")"
        }}
          className="page-bg"
        >
          <ExamplesNavbar notHome={true} />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg={12}>
                <h1 className="title my-3">AMENITIES</h1>
              </Col>
            </Row>
            <Row>
              <Col lg={6} className="right-border">
                <div className="amenities-container">
                  <img className="amenity-image" src={require("assets/img/amenities/wifi.png")} />
                  <div className="text-center amenity-text">
                    Retail Park With Free WIFI Connectivity
                  </div>
                  <div className="text-center amenity-text">
                    Meraj housing is a completely walled and
                    gated community with effective security
                    system ensuring a secure environment for
                    our residents
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="amenities-container">
                  <img className="amenity-image" src={require("assets/img/amenities/integrated.png")} />
                  <div className="text-center amenity-text">
                    Retail Park With Free WIFI Connectivity
                  </div>
                  <div className="text-center amenity-text">
                    Our society will have upgraded
                    technology, fiber optics cable, one wire
                    solution for telephone Internet and
                    entertainment facilitate
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="amenity-gradient">
          <Container>
            <Row>
              <Col lg={4}>
              <div className="amenities-container">
                  <img className="amenity-image" src={require("assets/img/amenities/park.png")} />
                  <div className="text-center amenity-text">
                    Retail Park
                  </div>
                </div>
              </Col>
              <Col lg={8} className="content-center text-white">
                Introducing a world class retail park to the city of Daska, with international chain
                of restaurants, cafes and clothing brands like never before in the city. The retail
                park will introduce new shopping and clothing brands to the city giving a boom
                to the industrial sector of the city. The retail park will be equipped with high
                speed Wi-Fi connection for the shoppers to enjoy
                Located just a few steps away from our society The retail park will provide a truly
                refined shopping experience to the residents of Meraj housing with leisure and
                Re entertainment activities for the whole family to enjoy
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="my-2">
            <Col lg={6} className="right-border">
              <div className="amenities-container bottom-border">
                <img className="amenity-image" src={require("assets/img/amenities/mosque.png")} />
                <div className="text-center amenity-text">
                  Retail Park With Free WIFI Connectivity
                  </div>
                <div className="text-center amenity-text">
                  Meraj housing is a completely walled and
                  gated community with effective security
                  system ensuring a secure environment for
                  our residents
                  </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="amenities-container bottom-border">
                <img className="amenity-image" src={require("assets/img/amenities/landscape.png")} />
                <div className="text-center amenity-text">
                  Retail Park With Free WIFI Connectivity
                  </div>
                <div className="text-center amenity-text">
                  Our society will have upgraded
                  technology, fiber optics cable, one wire
                  solution for telephone Internet and
                  entertainment facilitate
                  </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="right-border">
              <div className="amenities-container">
                <img className="amenity-image" src={require("assets/img/amenities/commercial.png")} />
                <div className="text-center amenity-text">
                  Retail Park With Free WIFI Connectivity
                  </div>
                <div className="text-center amenity-text">
                  Meraj housing is a completely walled and
                  gated community with effective security
                  system ensuring a secure environment for
                  our residents
                  </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="amenities-container">
                <img className="amenity-image" src={require("assets/img/amenities/security.png")} />
                <div className="text-center amenity-text">
                  Retail Park With Free WIFI Connectivity
                  </div>
                <div className="text-center amenity-text">
                  Our society will have upgraded
                  technology, fiber optics cable, one wire
                  solution for telephone Internet and
                  entertainment facilitate
                  </div>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
    </>
  );
}

export default Amenities;
