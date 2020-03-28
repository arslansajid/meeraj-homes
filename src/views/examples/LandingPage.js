import React, { useRef, useEffect } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import Map from '../../components/Map/map';

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

const LandingPage = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const formRef = useRef(null);

  return (
    <>
      <ExamplesNavbar formRef={formRef} />
      {/* <LandingPageHeader /> */}
      <IndexHeader />
      <div className="main">
        <div className="section text-center lightgrey-bg">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk product</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful Interior</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center darkgrey-bg">
          <Container>
            <h2 className="title">Let's talk about Amenities</h2>
            <Row>
              <Col md="2">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={'https://blueandgreentomorrow.com/wp-content/uploads/2017/12/sustainable-roads-motorways.jpg'}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Roads</CardTitle>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="2">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={'https://www.zameen.com/blog/wp-content/uploads/2019/04/cover-image-2-6.jpg'}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Gyms</CardTitle>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="2">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={'https://cdn.civitatis.com/reino-unido/londres/guia/hyde-park-grid-m.jpg'}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Parks</CardTitle>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="2">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={'https://mk0ehealtheletsj3t14.kinstacdn.com/wp-content/uploads/2009/07/best-hospital-in-south-india.jpg'}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Hospitals</CardTitle>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="2">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={'https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png'}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Schools</CardTitle>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="2">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={'https://postornot.com/wp-content/uploads/2019/06/Shopping-Center.jpg'}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Malls</CardTitle>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section map-container lightgrey-bg">
          <Container>
            <h2 className="title text-center">The Best Location In Town</h2>
            <Row>
            <Col md="3">
            <Map image={true} marker={{lat: 32.3208, lng: 74.2150}} />
                <ul className="card-description mt-3">
                  <li>This is the paragraph where you can write more details about
                  your product.
                  </li>
                  <li>Keep you user engaged by providing meaningful
                  information.
                  </li>
                </ul>
                <div className="text-center mt-2 mb-5 mb-lg-0">
                  <a
                    href={"https://www.google.com/maps/dir/?api=1&destination=Roomy+Isb+Royal+Islamabad+Pakistan"}
                    target="_blank"
                  >
                    <Button>Get Directions</Button>
                  </a>
                </div>
              </Col>
              <Col md="3">
              <Map image={true} marker={{lat: 32.20, lng: 74.21}} />
                <ul className="card-description mt-3">
                  <li>This is the paragraph where you can write more details about
                  your product.
                  </li>
                  <li>Keep you user engaged by providing meaningful
                  information.
                  </li>
                </ul>
                <div className="text-center mt-2 mb-5 mb-lg-0">
                  <a
                    href={"https://www.google.com/maps/dir/?api=1&destination=Roomy+Isb+Royal+Islamabad+Pakistan"}
                    target="_blank"
                  >
                    <Button>Get Directions</Button>
                  </a>
                </div>
              </Col>
              <Col md="3">
              <Map image={true} marker={{lat: 32.16, lng: 74.40}} />
                <ul className="card-description mt-3">
                  <li>This is the paragraph where you can write more details about
                  your product.
                  </li>
                  <li>Keep you user engaged by providing meaningful
                  information.
                  </li>
                </ul>
                <div className="text-center mt-2 mb-5 mb-lg-0">
                  <a
                    href={"https://www.google.com/maps/dir/?api=1&destination=Roomy+Isb+Royal+Islamabad+Pakistan"}
                    target="_blank"
                  >
                    <Button>Get Directions</Button>
                  </a>
                </div>
              </Col>
              <Col md="3">
                <Map image={true} marker={{lat: 32.2933, lng: 74.3152}} />
                <ul className="card-description mt-3">
                  <li>This is the paragraph where you can write more details about
                  your product.
                  </li>
                  <li>Keep you user engaged by providing meaningful
                  information.
                  </li>
                </ul>
                <div className="text-center mt-2 mb-5 mb-lg-0">
                  <a
                    href={"https://www.google.com/maps/dir/?api=1&destination=Roomy+Isb+Royal+Islamabad+Pakistan"}
                    target="_blank"
                  >
                    <Button>Get Directions</Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section map-container darkgrey-bg">
          <Container>
            <Row>
              <Col md="6">
                <h3>Location</h3>
                <p className="location-description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more.
                </p>
              </Col>
              <Col md="6">
                <Map image={false} />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section lightgrey-bg" ref={formRef}>
          <Container>
            <Row>
              <Col md="12">
              <h3 className="mb-3">Location Details:</h3>
                <Row className="contact-row">
                  <Col xs="3" lg="2">
                  <i className="nc-icon nc-pin-3 mr-1" />
                    Location:
                  </Col>
                  <Col xs="9" lg="10" className="p-0">
                  <div>
                    3KM Main Daska Road towards Sialkot,
                  </div>
                  <div>
                    Near Sialkot-Lahore Motorway Interchange point,
                  </div>
                  <div>
                    Tehsil Daska, District Sialkot.
                  </div>
                  </Col>
                </Row>
                <h3 className="mb-3">Contact Details:</h3>
                <Row className="contact-row mb-1">
                  <Col xs="3" lg="2">
                    <i className="nc-icon nc-email-85 mr-1" />
                    Email:
                  </Col>
                  <Col xs="auto" lg="10" className="p-0">
                    khurram@virkgroup.com
                  </Col>
                </Row>
                <Row className="contact-row">
                  <Col xs="3" lg="2">
                    <i className="nc-icon nc-mobile mr-1" />
                    Mobile:
                  </Col>
                  <Col xs="auto" lg="10" className="p-0">
                  0300 8512727
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
