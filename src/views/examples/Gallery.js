
import React, { useState } from "react";

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
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const customStyles = {
    content : {
      zIndex: 1031
    }
  };

  const images = [
    {
      original: require("assets/img/3d/3d/1.jpg"),
      thumbnail: require("assets/img/3d/3d/1.jpg"),
    },
    {
      original: require("assets/img/3d/3d/2.jpg"),
      thumbnail: require("assets/img/3d/3d/1.jpg"),
    },
    {
      original: require("assets/img/3d/3d/3.jpg"),
      thumbnail: require("assets/img/3d/3d/1.jpg"),
    },
    {
      original: require("assets/img/3d/3d/4.jpg"),
      thumbnail: require("assets/img/3d/3d/1.jpg"),
    },
    {
      original: require("assets/img/3d/attachments/1.jpg"),
      thumbnail: require("assets/img/3d/3d/1.jpg"),
    },
    {
      original: require("assets/img/3d/attachments/2.jpg"),
      thumbnail: require("assets/img/3d/3d/1.jpg"),
    },
    {
      original: require("assets/img/3d/attachments/3.jpg"),
      thumbnail: require("assets/img/3d/3d/1.jpg"),
    },
  ];

  const lightBoximages = [
    `${require("assets/img/gallery/2.png")}`,
    `${require("assets/img/gallery/1.png")}`,
    `${require("assets/img/gallery/3.png")}`,
    `${require("assets/img/gallery/4.png")}`,
    `${require("assets/img/gallery/2.png")}`,
    `${require("assets/img/gallery/1.png")}`,
  ];

  return (
    <>
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
          <Row >
            <Col lg={6} md={6} sm={12} className="my-3">
            <div
                onClick={() => setIsOpen(true)}
                className="w-100 h-100 flyer-container"
              >
                <img className="flyer" src={require("assets/img/gallery/2.png")} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="my-3">
            <div
              onClick={() => setIsOpen(true)}
                className="w-100 h-100 flyer-container"
              >
                <img className="flyer" src={require("assets/img/gallery/1.png")} />
              </div>
            </Col>
          </Row>
          <Row >
          <Col lg={6} md={6} sm={12} className="my-3">
            <div
              onClick={() => setIsOpen(true)}
                className="w-100 h-100 flyer-container"
              >
                <img className="flyer" src={require("assets/img/gallery/3.png")} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="my-3">
            <div
              onClick={() => setIsOpen(true)}
                className="w-100 h-100 flyer-container"
              >
                <img className="flyer" src={require("assets/img/gallery/4.png")} />
              </div>
            </Col>
          </Row>
          <Row >
          <Col lg={6} md={6} sm={12} className="my-3">
            <div
              onClick={() => setIsOpen(true)}
                className="w-100 h-100 flyer-container"
              >
                <img className="flyer" src={require("assets/img/gallery/2.png")} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="my-3">
            <div
              onClick={() => setIsOpen(true)}
                className="w-100 h-100 flyer-container"
              >
                <img className="flyer" src={require("assets/img/gallery/1.png")} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={lightBoximages[photoIndex]}
          nextSrc={lightBoximages[(photoIndex + 1) % lightBoximages.length]}
          prevSrc={lightBoximages[(photoIndex + lightBoximages.length - 1) % lightBoximages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + lightBoximages.length - 1) % lightBoximages.length)}
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % lightBoximages.length)}
            enableZoom={true} 
            reactModalStyle={customStyles}
        />
      )}
      </>
  );
}

export default Gallery;
