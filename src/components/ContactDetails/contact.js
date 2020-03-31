import React from "react";
import {Container, Col, Row} from "reactstrap";
import Map from "../Map/map";

 const ContactDetails = () => {
    return (
        <Container>
            <Row>
              <Col md="6" className="ml-auto mr-auto">
                <h2 className="mb-5 text-center">Contact</h2>
                <Row className="contact-row mb-3">
                  <Col xs="1" lg="1" md="1">
                  <i className="nc-icon nc-pin-3 mr-1" />
                    {/* Location: */}
                  </Col>
                  <Col xs="11" lg="11" md="11" className="p-0">
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
                  <Col xs="1" lg="1" md="1">
                    <i className="nc-icon nc-email-85 mr-1" />
                    {/* Email: */}
                  </Col>
                  <Col xs="auto" lg="11" md="11" className="p-0 detail">
                    khurram@virkgroup.com
                  </Col>
                </Row>
                <Row className="contact-row">
                  <Col xs="1" lg="1" md="1">
                    <i className="nc-icon nc-mobile mr-1" />
                    {/* Mobile: */}
                  </Col>
                  <Col xs="11" lg="11" md="11" className="p-0 detail">
                  +92 300 8512727
                  </Col>
                </Row>
                <Row className="contact-row justify-content-center">
                  <Col lg="8" auto className="mt-4">
                    <Map image={true} marker={{lat: 32.356479, lng: 74.398129}} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
    )
}

export default ContactDetails;