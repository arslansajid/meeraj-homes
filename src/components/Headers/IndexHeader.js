
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import LogoGif from "../../assets/img/gif/Meraj-Logo.gif";
import LogoVideo from "../../assets/img/gif/logo.mp4";
// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/bg.png") + ")",
          backgroundColor: "#5D5855",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              {/* <h1 className="presentation-title">Meraj Housing</h1> */}
              <div className="landing-logo-container">
                {/* <img className="logo" src={require('../../assets/img/logo@2x.png')} /> */}
                <img src={LogoGif} alt="loading..." />
                {/* <video src={LogoVideo} width="600" height="300" autoplay="true" /> */}
              </div>
              {/* <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div> */}
            </div>
            {/* <h2 className="presentation-subtitle text-center">
              Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!
            </h2> */}
          </Container>
        </div>
        {/* <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        /> */}
        <h4 className="category category-absolute">
          <a
            href="/"
            target="_blank"
          >
          </a>
        </h4>
      </div>
    </>
  );
}

export default IndexHeader;
