
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

const AboutUs = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    window.scrollTo(0,0);
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  return (
    <>
      <ExamplesNavbar notHome={true} />
      <div className="section about-us">
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="title my-3">ABOUT US</h1>
              <div className="detail">
                Meraj Housing society is a project owned by the Directors of Virk Group of Industries,
                which has developed its name in the filed of manufacturing and customer service since 1995.
                This housing project is the dream of the owners to provide the residents with a modern,
                state of the art society in line with international standards thus adding value to the identity of our beloved city, Sialkot.
              </div>
            </Col>
          </Row>

          <Row className="my-5">
            <Col
              lg={6} 
              style={{
                backgroundImage: "url(" + require("assets/img/gate@2x.png") + ")",
              }}
              className="about-image" />
            <Col lg={6} className="dark-bg content-center">
              <div className="detail">
                The society is ideally situated few feet away from the newly laid motorway M11, interconnecting the entire district to the nearby cities very conveniently.
                The prime location will be highly favorable for the residents for hassle free travelling, avoiding the crowded city highways thus saving the travel time and improving their quality of life
              </div>
            </Col>
          </Row>

          <Row className="my-5">
            <Col lg={6} className="light-bg content-center">
              <div className="detail">
                Our infrastructure is meticulously planned and executed by the renowned architects and designers inspired by the modern minimalist trend, highlighting sleek and clean exteriors in a clean and green environment. Our careful planning’s are further lead by skilled professionals working tirelessly to visualize the dream of the developers in providing the customers the true value for their money.  We understand the need for an upgraded contemporary society but yet affordable at the same time for our people 
              </div>
            </Col>
            <Col
              lg={6} 
              style={{
                backgroundImage: "url(" + require("assets/img/entrance2@2x.png") + ")",
              }}
              className="about-image" />
          </Row>

          <Row className="my-5">
            <Col
              lg={6} 
              style={{
                backgroundImage: "url(" + require("assets/img/entrance@2x.png") + ")",
              }}
              className="about-image" />
            <Col lg={6} className="dark-bg content-center">
              <div className="detail">
                Meraj housing will stand out from the rest because of its modern infrastructure and world class facilitates in the most accessible area of the district. Our society will have a big impact in enhancing the structural value of our district and enriching the lifestyle of our residents.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default AboutUs;
