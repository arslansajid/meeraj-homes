import React from "react";

// reactstrap components
import { Col, Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer">
      <h3 className="title text-center">CONTACT US</h3>
      <Container fluid>
        <Row className="">
          <Col lg={4} md={6} sm={12}>
            <div className=" footer-card border-right">
              <img className="footer-icon" src={require("assets/img/footer/call.png")} />
              <div>+92 300 8512727</div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className=" footer-card border-right">
            <img className="footer-icon" src={require("assets/img/footer/map.png")} />
            <div>
              3KM Main Daska Road towards Sialkot, <br />
              Near Sialkot-Lahore Motorway Interchange point, <br />
              Tehsil Daska, District Sialkot.</div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className=" footer-card">
            <img className="footer-icon" src={require("assets/img/footer/msg.png")} />
              <div>khurram@virkgroup.com</div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
