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
import ContactDetails from '../../components/ContactDetails/contact';

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
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
      <IndexHeader />
      <div className="main">
        <div className="entrance-gate-section">
          <div className="entrance-gate">
            <img className="entrance-gate-image" src={require("../../assets/img/entrance@2x.png")} />
          </div>
          <div className="entrance-heading">
            THE MAGNIFICENT MERAJ
          </div>
        </div>
        <div className="location-importance-section">
          <Container>
            <Row>
              <Col lg={6}>
              <div style={{position: "relative"}}>
                <div className="image-container">
                  <img src={require("../../assets/img/entrance2@2x.png")} />
                </div>
              </div>
              </Col>
              <Col lg={6}>
                <h3>Live at the heart of the district</h3>
                <br />
                <div>
                  Sialkot’s first society located at the most ideal location of the district. Meraj housing aims to provide our city with a modern state of the art society with world-class amenities at the heart of the district, Sialkot <br />
                  <br />
                  The geographical location of the society makes it the most ideal place to live. Located just 250 feet away from the newly laid motorway. The society is well connected to all nearby premium locations in the shortest time possible adding convenience to the life of residents <br />
                  <br />
                  We have designed the exteriors keeping in mind the need for a modern society in our city, thus adding value to the dignity of our city. Our infrastructure is inspired by the modern minimalist trend highlighting sleek and clean exteriors executed by a team of renowned designers and architects. Modern infrastructure coupled with beautiful landscaped parks will provide residents with all the comforts of an enriched peaceful lifestyle. <br />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="location-section">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="importance">
                  <div className="text-center">Importance of location</div>
                  <div>
                  The most centrally connected society: <br /> <br />
                  <ul>
                    <li>
                      Meraj housing society is ideally situated 250 feet away from the newly laid motorway M11, interconnecting the entire district to the nearby cities very conveniently
                    </li>
                    <br/>
                    <li>
                      The geographical location of the society coupled with modern facilitates Provides the best connectivity and an enriching experience for our residents to enjoy
                    </li>
                    <br/>
                    <li>
                      Travelling avoiding the crowded city highways is a great stress reliever in todays time Meraj housing will standout amongst all other societies in the city because of its prestigious location. The prime location will be highly favorable for the residents for hassle free travelling. Our society will give easy access to all nearby cities, landmarks and attractions making life convenient for our residents
                    </li>
                  </ul>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="importance">
                  <div className="paper">
                    <h3>Travel Time to Premium Locations from MERAJ HOUSING through MOTORWAY M11</h3>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
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
            <h2 className="title text-center">Most Accessible Location In Town</h2>
            <Row>
              <Col md="5">
                <Map /* image={true} marker={{lat: 32.3208, lng: 74.2150}} */ />
                <div className="text-center mt-2 mb-3 mb-lg-0">
                  <a
                    href={"http://www.google.com/maps/place/32.356479,74.398129"}
                    target="_blank"
                  >
                    <Button>Get Directions</Button>
                  </a>
                </div>
              </Col>
              <Col md="5">
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Destinations</th>
                      <th>Distance</th>
                      <th>Time</th>
                    </tr>
                    <tr>
                      <td><i className="fa fa-1x fa-map-marker map-marker" />Daska</td>
                      <td>3 km</td>
                      <td>5 mins</td>
                    </tr>
                    <tr>
                      <td><i className="fa fa-1x fa-map-marker map-marker" />Lahore</td>
                      <td>100 km</td>
                      <td>41 mins</td>
                    </tr>
                    <tr>
                      <td><i className="fa fa-1x fa-map-marker map-marker" />Sialkot Airport</td>
                      <td>22 km</td>
                      <td>20 mins</td>
                    </tr>
                    <tr>
                      <td><i className="fa fa-1x fa-map-marker map-marker" />Wazirabad road Sambrial </td>
                      <td>13 km</td>
                      <td>12 mins</td>
                    </tr>
                    <tr>
                      <td><i className="fa fa-1x fa-map-marker map-marker" />Ugoki</td>
                      <td>18 km</td>
                      <td>19 mins</td>
                    </tr>
                    <tr>
                      <td><i className="fa fa-1x fa-map-marker map-marker" />Sialkot</td>
                      <td>16 km</td>
                      <td>17 mins</td>
                    </tr>
                  </tbody>
                </table>
              </Col>
              {/* <Col md="3">
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
              </Col> */}
              {/* <Col md="3">
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
              </Col> */}
              {/* <Col md="3">
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
              </Col> */}
            </Row>
          </Container>
        </div>
        <div className="section map-container darkgrey-bg">
          <Container>
            <Row>
              <Col md="8">
                <h3>Location</h3>
                <p className="location-description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more.
                </p>
              </Col>
              <Col md="4">
                {/* <Map image={false} /> */}
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section lightgrey-bg" ref={formRef}>
          <ContactDetails />
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
