import React from "react";
import {Container, Col, Row, Button} from "reactstrap";
import Map from "../Map/map";

 const ContactDetails = () => {
    return (
        <Container>
            <Row>
              <Col md="6" className="ml-auto mr-auto">
                <h2 className="mb-5 text-center title">Contact</h2>
                <Row className="contact-row mb-3">
                  <Col xs="2" lg="2" md="2" className="text-right">
                  <i className="nc-icon nc-pin-3 mr-2" />
                    {/* Location: */}
                  </Col>
                  <Col xs="9" lg="9" md="10" className="p-0">
                  <div className="detail">
                    3KM Main Daska Road towards Sialkot,
                  </div>
                  <div className="detail">
                    Near Sialkot-Lahore Motorway Interchange point,
                  </div>
                  <div className="detail">
                    Tehsil Daska, District Sialkot.
                  </div>
                  </Col>
                </Row>
                <Row className="contact-row mb-3">
                  <Col xs="2" lg="2" md="2" className="text-right">
                    <i className="nc-icon nc-email-85 mr-2" />
                    {/* Email: */}
                  </Col>
                  <Col xs="9" lg="9" md="10" className="p-0 detail">
                    khurram@virkgroup.com
                  </Col>
                </Row>
                <Row className="contact-row">
                  <Col xs="2" lg="2" md="2" className="text-right">
                    <i className="nc-icon nc-mobile mr-2" />
                    {/* Mobile: */}
                  </Col>
                  <Col xs="9" lg="9" md="10" className="p-0 detail">
                  +92 300 8512727
                  </Col>
                </Row>
                <Row className="contact-row justify-content-center">
                  <Col lg="8" className="mt-4">
                    <Map image={true} marker={{lat: 32.356479, lng: 74.398129}} />
                  </Col>
                </Row>
                <div className="text-center mt-2 mb-5 mb-lg-0">
                  <a
                    href={"http://www.google.com/maps/place/32.356479,74.398129"}
                    target="_blank"
                  >
                    <Button>Get Directions</Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
    )
}

export default ContactDetails;