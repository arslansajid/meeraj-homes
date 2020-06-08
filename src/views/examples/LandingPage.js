import React, { useRef, useEffect } from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";
import Map from '../../components/Map/map';
import ContactDetails from '../../components/ContactDetails/contact';
import ImageGallery from 'react-image-gallery';

// core components
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import IndexHeader from "../../components/Headers/IndexHeader";
import DemoFooter from "../../components/Footers/DemoFooter";


//third party carousel
import Slider from "react-slick";

const LandingPage = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const formRef = useRef(null);

  const images = [
    {
      original: require("assets/img/gate@2x.png"),
      thumbnail: require("assets/img/gate@2x.png"),
    },
    {
      original: require("assets/img/gate@2x.png"),
      thumbnail: require("assets/img/gate@2x.png"),
    },
  ]

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
        <div className="d-none d-lg-block d-md-block" style={{ position: "relative" }}>
          <div className="image-container">
            <img src={require("../../assets/img/entrance2@2x.png")} />
          </div>
        </div>
        <div className="location-importance-section">
          <Container>
            <Row>
              <Col lg={6} md={6}>
                
              </Col>
              <Col lg={6} md={6} sm={12}>
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
                  <h3 className="title text-center heading">Importance of location</h3>
                  <div className="important-points">
                    The most centrally connected society: <br /> <br />
                    <ul>
                      <li>
                        Meraj housing society is ideally situated 250 feet away from the newly laid motorway M11, interconnecting the entire district to the nearby cities very conveniently
                    </li>
                      <br />
                      <li>
                        The geographical location of the society coupled with modern facilitates Provides the best connectivity and an enriching experience for our residents to enjoy
                    </li>
                      <br />
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
                    <h4 className="title">Travel Time to Premium Locations from MERAJ HOUSING through MOTORWAY M11</h4>
                    <table className="table">
                  <tbody>
                    <tr>
                      <th>Destinations</th>
                      <th>Distance</th>
                      <th>Time</th>
                    </tr>
                    <tr>
                      <td><img className="map-marker" src={require("assets/img/footer/map.png")} />Daska</td>
                      <td>3 km</td>
                      <td>5 mins</td>
                    </tr>
                    <tr>
                      <td><img className="map-marker" src={require("assets/img/footer/map.png")} />Lahore</td>
                      <td>100 km</td>
                      <td>41 mins</td>
                    </tr>
                    <tr>
                      <td><img className="map-marker" src={require("assets/img/footer/map.png")} />Sialkot Airport</td>
                      <td>22 km</td>
                      <td>20 mins</td>
                    </tr>
                    <tr>
                      <td><img className="map-marker" src={require("assets/img/footer/map.png")} />Wazirabad road Sambrial </td>
                      <td>13 km</td>
                      <td>12 mins</td>
                    </tr>
                    <tr>
                      <td><img className="map-marker" src={require("assets/img/footer/map.png")} />Ugoki</td>
                      <td>18 km</td>
                      <td>19 mins</td>
                    </tr>
                    <tr>
                      <td><img className="map-marker" src={require("assets/img/footer/map.png")} />Sialkot</td>
                      <td>16 km</td>
                      <td>17 mins</td>
                    </tr>
                  </tbody>
                </table>
                    <img className="map-location-image" src={require("assets/img/location.png")} alt="map-location" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          style={{
            backgroundImage: "url(" + require("assets/img/gate@2x.png") + ")",
          }}
          className="bg-image">
          <div className="meeraj-gate-text">
            <div className="large">MERAJ HOUSING</div>
            <div className="small">ENTRANCE WAY</div>
          </div>
        </div>

        <div className="gallery-section">
        <ImageGallery
                items={images}
                autoPlay={true}
                showPlayButton={false}
                showBullets={false}
                showThumbnails={false}
                showFullscreenButton={false}
                showNav={false}
              />
          {/* <Slider
            className="center carousel-slider"
            // centerMode={true}
            slidesToShow={1}
            slidesToScroll={1}
            speed={1000}
            autoplay={true}
            cssEase="linear"
            pauseOnHover={false}
            arrows={false}
          >
            <div>
              <img src={require("assets/img/gallery@2x.png")} />
            </div>
            <div>
              <img src={require("assets/img/gallery@2x.png")} />
            </div>
            <div>
              <img src={require("assets/img/gallery@2x.png")} />
            </div>
          </Slider> */}
        </div>

        <div className="amenities-section">
          <h2 className="title text-center">AMENITIES</h2>
          <Container>
            <Row>
              <Col lg={4} md={6} sm={6}>
                <div className="amenities-container">
                  <img className="amenity-image" src={require("assets/img/amenities/mosque.png")} />
                  <div className="text-center amenity-text">
                    Grand Air Conditioned Mosque
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} sm={6}>
                <div className="amenities-container">
                  <img className="amenity-image" src={require("assets/img/amenities/landscape.png")} />
                  <div className="text-center amenity-text">
                    Beautiful Landscape Parks
                  </div>
                </div>

              </Col>
              <Col lg={4} md={6} sm={6}>
                <div className="amenities-container">
                  <img className="amenity-image" src={require("assets/img/amenities/kids-play.png")} />
                  <div className="text-center amenity-text">
                    Open Play Area For Kids
                  </div>
                </div>

              </Col>
              <Col lg={4} md={6} sm={6}>
                <div className="amenities-container">
                  <img className="amenity-image" src={require("assets/img/amenities/commercial.png")} />
                  <div className="text-center amenity-text">
                    Commercial Zone for Daily Needs
                  </div>
                </div>

              </Col>
              <Col lg={4} md={6} sm={6}>
                <div className="amenities-container">
                  <img className="amenity-image" src={require("assets/img/amenities/security.png")} />
                  <div className="text-center amenity-text">
                    Flawlessly Integrated Security System
                  </div>
                </div>

              </Col>
              <Col lg={4} md={6} sm={6}>
                <div className="amenities-container">
                  <img className="amenity-image" src={require("assets/img/amenities/CCTV.png")} />
                  <div className="text-center amenity-text">
                    CCTV Surveillance Cameras
                  </div>
                </div>

              </Col>
              <Col lg={4} md={6} sm={6}>
                <div className="amenities-container">
                  <img className="amenity-image" src={require("assets/img/amenities/park.png")} />
                  <div className="text-center amenity-text">
                    World Class Retail Park
                  </div>
                </div>

              </Col>
              <Col lg={4} md={6} sm={6}>
                <div className="amenities-container">
                  <img className="amenity-image" src={require("assets/img/amenities/wifi.png")} />
                  <div className="text-center amenity-text">
                    Retail Park With Free WIFI Connectivity
                  </div>
                </div>

              </Col>
              <Col lg={4} md={6} sm={6}>
                <div className="amenities-container">
                  <img className="amenity-image" src={require("assets/img/amenities/integrated.png")} />
                  <div className="text-center amenity-text">
                    Flawlessly Integrated Security System
                  </div>
                </div>

              </Col>
            </Row>
          </Container>
        </div>

        <div className="park-features-section">
          <Container>
            <Row>
              <Col className="d-none d-lg-block" lg={6}>
                <div style={{position: "relative"}} className="left-border h-100">
                  <div className="coming-soon-container">
                    <h3 className="title text-center coming-soon-intro">
                      Introducing City's First World Class Retail Park
                    </h3>
                    <h2 className="title text-center coming-soon-text">
                      COMING SOON
                    </h2>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <img className="park-parking-image" src={require("assets/img/parking@2x.png")}></img>
              </Col>
              <Col lg={12}>
                <div className="feature-text">
                  Bringing world-class retail park to the city of daska.
                  The retail park will give a boom to the business sector of the city and will also be an amazing recreational spot for families to enjoy.
                  Residents of meraj housing will enjoy close proximity to the retail park providing them an ultimate shopping experience like never before.
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="right-border content-center">
                <img className="feature-image" src={require("assets/img/park-features/cafe.png")} />
                <div className="text-center">International chains of restaurants and cafes</div>
              </Col>
              <Col className="right-border content-center">
                <img className="feature-image" src={require("assets/img/park-features/shopping.png")} />
                <div className="text-center">
                  New Shopping brands
                </div>
              </Col>
              <Col className="right-border content-center">
                <img className="feature-image" src={require("assets/img/park-features/kids.png")} />
                <div className="text-center">
                  Entertainment for kids
                </div>
              </Col>
              <Col className="right-border content-center">
                <img className="feature-image" src={require("assets/img/park-features/parking.png")} />
                <div className="text-center">
                  large open parking space
                </div>
              </Col>
              <Col className="content-center">
                <img className="feature-image" src={require("assets/img/park-features/wifi.png")} />
                <div className="text-center">
                  High Speed Free Wifi Connectivity
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="">
          <div
            style={{
              backgroundImage: "url(" + require("assets/img/bg.png") + ")",
            }}
            className="bg-image">
            <div className="payment-section">
              <h3>PROJECT DETAILS</h3>
              <h2 className="title">3 YEARS EASY PAYMENT PLAN</h2>
              <Container>
                <Row>
                  <Col lg={3} md={6} sm={12}>
                    <div style={{background: '#B5A194'}} className="plot-card content-center">
                      <img className="plot-image" src={require("assets/img/plots/5.png")} />
                      <h4 className="title">5 MARLA</h4>
                      <h5 className="mb-5">RESIDENTIAL PLOTS</h5>
                      <div className="learn-more content-center">
                        LEARN MORE
                    </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <div style={{background: '#E8E5E0'}} className="plot-card content-center">
                      <img className="plot-image" src={require("assets/img/plots/10.png")} />
                      <h4 className="title">10 MARLA</h4>
                      <h5 className="mb-5">RESIDENTIAL PLOTS</h5>
                      <div className="learn-more content-center">
                        LEARN MORE
                    </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <div style={{background: '#9D948B'}} className="plot-card content-center">
                      <img className="plot-image" src={require("assets/img/plots/1.png")} />
                      <h4 className="title">1 KANAL</h4>
                      <h5 className="mb-5">RESIDENTIAL PLOTS</h5>
                      <div className="learn-more content-center">
                        LEARN MORE
                    </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <div style={{background: '#F5F5F5'}} className="plot-card content-center">
                      <img className="plot-image" src={require("assets/img/plots/commercial.png")} />
                      <h4 className="title">COMMERCIAL PLOTS</h4>
                      <h5 className="mb-5">RESIDENTIAL PLOTS</h5>
                      <div className="learn-more content-center">
                        LEARN MORE
                    </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>

        <div className="footer-logo-section content-center">
          <img className="footer-image" src={require("assets/img/logo@2x.png")} />
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
