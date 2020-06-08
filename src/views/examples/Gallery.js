
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
      original: require("assets/img/gate@2x.png"),
      thumbnail: require("assets/img/gate@2x.png"),
    },
    {
      original: require("assets/img/gate@2x.png"),
      thumbnail: require("assets/img/gate@2x.png"),
    },
    {
      original: require("assets/img/gate@2x.png"),
      thumbnail: require("assets/img/gate@2x.png"),
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
    <>
      <ExamplesNavbar />
      <div style={{marginTop: 50}} className="gallery">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto my-5" lg={10}>
              <ImageGallery
                items={images}
                autoPlay={true}
                showPlayButton={false}
              />
            </Col>
          </Row>
        </Container>

      </div>
    </>
  );
}

export default Gallery;
