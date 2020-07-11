import React from "react";

// reactstrap components
import { Col, Row, Container } from "reactstrap";

function DemoFooter(props) {
  return (
    <footer className={props.dark ? 'footer-dark' : `footer`}>
      <h3 className="title text-center">
        CONTACT US
      </h3>
      <Container fluid>
        <Row className="">
          <Col lg={4} md={6} sm={12}>
            <div className=" footer-card border-right">
              <img className="footer-icon" src={require("assets/resources/phone.svg")} />
              <div>+923000247777</div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className=" footer-card border-right">
            <img className="footer-icon" src={require("assets/resources/map-pin.svg")} />
            <div>
              3KM Main Daska Road towards Sialkot, <br />
              Near Sialkot-Lahore Motorway Interchange point, <br />
              Tehsil Daska, District Sialkot.</div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className=" footer-card">
            <img className="footer-icon" src={require("assets/resources/mail.svg")} />
              <div>info@merajhousing.com</div>
            </div>
          </Col>
        </Row>
        <Row className="my-2 justify-content-center">
          <img className="social-icon mr-5" src={require("assets/resources/facebook.svg")} />
          <img className="social-icon mr-5" src={require("assets/resources/instagram.svg")} />
          <img className="social-icon" src={require("assets/resources/whatsapp.svg")} />
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
