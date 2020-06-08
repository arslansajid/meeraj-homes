
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
// pages
import Amenities from "views/examples/Amenities.js";
import SocietyMaps from "views/examples/SocietyMaps.js";
import AboutUs from "views/examples/AboutUs.js";
import ContactUs from "views/examples/ContactUs.js";
import Payments from "views/examples/Payments.js";
import LandingPage from "views/examples/LandingPage.js";
import Projects from "views/examples/Projects";
import Gallery from "views/examples/Gallery";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/projects"
        render={props => <Projects {...props} />}
      />
      <Route
        path="/amenities"
        render={props => <Amenities {...props} />} />
        <Route
        path="/society-maps"
        render={props => <SocietyMaps {...props} />} />
      <Route
        path="/about-us"
        render={props => <AboutUs {...props} />}
      />
      <Route
        path="/contact-us"
        render={props => <ContactUs {...props} />}
      />
      <Route
        path="/payments"
        render={props => <Payments {...props} />}
      />
      <Route
        path="/gallery"
        render={props => <Gallery {...props} />}
      />
      <Route
        path="/"
        render={props => <LandingPage {...props} />}
      />
      {/* <Redirect to="/landing-page" /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
