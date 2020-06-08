
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
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

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
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: require("assets/img/gate@2x.png"),
      thumbnail: require("assets/img/gate@2x.png"),
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: require("assets/img/gate@2x.png"),
      thumbnail: require("assets/img/gate@2x.png"),
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: require("assets/img/gate@2x.png"),
      thumbnail: require("assets/img/gate@2x.png"),
    },
  ];

  return (
    <>
      <ExamplesNavbar />
      <div className="gallery">
      <ImageGallery
        items={images}
        autoPlay={true}
        showPlayButton={false}
      />
      </div>
    </>
  );
}

export default Gallery;
