
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
import ImageGallery from 'react-image-gallery';

function Gallery() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const images = [
    {
      original: require("assets/img/gate@2x.png"),
      thumbnail: require("assets/img/gate@2x.png"),
    },
    {
      original: require("assets/img/entrance@2x.png"),
      thumbnail: require("assets/img/entrance@2x.png"),
    },
    {
      original: require("assets/img/gate@2x.png"),
      thumbnail: require("assets/img/gate@2x.png"),
    },
    {
      original: require("assets/img/entrance@2x.png"),
      thumbnail: require("assets/img/entrance@2x.png"),
    },
    // {
    //   original: 'https://picsum.photos/id/1015/1000/600/',
    //   thumbnail: 'https://picsum.photos/id/1015/250/150/',
    // },
    {
      original: require("assets/img/gate@2x.png"),
      thumbnail: require("assets/img/gate@2x.png"),
    },
  ];

  return (
    <div className="gallery">
      <ExamplesNavbar />
        <ImageGallery
          items={images}
          autoPlay={true}
          showPlayButton={false}
          showThumbnails={false}
          showFullscreenButton={false}
          showNav={false}
        />
        <Container className="my-5">
          <Row className="my-3">
            <Col lg={6} md={6} sm={12}>
            <div
                className="w-100 h-100 flyer-container"
              >
                <img className="flyer" src={require("assets/img/gallery/2.png")} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
            <div
                className="w-100 h-100 flyer-container"
              >
                <img className="flyer" src={require("assets/img/gallery/1.png")} />
              </div>
            </Col>
          </Row>
          <Row className="my-3">
          <Col lg={6} md={6} sm={12}>
            <div
                className="w-100 h-100 flyer-container"
              >
                <img className="flyer" src={require("assets/img/gallery/3.png")} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
            <div
                className="w-100 h-100 flyer-container"
              >
                <img className="flyer" src={require("assets/img/gallery/4.png")} />
              </div>
            </Col>
          </Row>
          <Row className="my-3">
          <Col lg={6} md={6} sm={12}>
            <div
                className="w-100 h-100 flyer-container"
              >
                <img className="flyer" src={require("assets/img/gallery/2.png")} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
            <div
                className="w-100 h-100 flyer-container"
              >
                <img className="flyer" src={require("assets/img/gallery/1.png")} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Gallery;
