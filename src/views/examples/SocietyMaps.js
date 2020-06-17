
import React, {useRef} from "react";

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
import ReactToPrint from 'react-to-print';

const SocietyMaps = () => {
  const componentRef = useRef();

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    window.scrollTo(0,0);
    document.body.classList.add("society-maps-page");
    return function cleanup() {
      document.body.classList.remove("society-maps-page");
    };
  });
  return (
    <>
      <ExamplesNavbar notHome={true} />
      <div className="section project-map">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="d-flex justify-content-between align-items-center">
              <h1 className="title my-3">PROJECT MAP</h1>
              <ReactToPrint
                trigger={() => (
                  <Button className="print-btn" size="md">
                    PRINT MAP
                  </Button>
                )}
                content={() => componentRef.current}
              />
              
              </div>
            </Col>
            <Col lg={12}>
              <div ref={componentRef}>
                <img className="project-map" src={require("assets/img/map.png")} />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="content-center">
          <img src={require("assets/img/map-legend@2x.png")} className="d-lg-none d-md-none d-block" />
        </div>
        {/* <DemoFooter /> */}
        </div>
        <div className="map-legend d-none d-lg-block">
          <img src={require("assets/img/map-legend@2x.png")} className="" />
        </div>
    </>
  );
}

export default SocietyMaps;
