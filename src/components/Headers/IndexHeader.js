
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark darkgrey-bg"
        // style={{
        //   backgroundImage:
        //     "url(" + require("assets/img/JCC.jpg") + ")"
        // }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              {/* <h1 className="presentation-title">Meraj Housing</h1> */}
              <div className="landing-logo-container">
                <img className="logo" src={require('../../assets/img/logo_transparent.png')} />
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
            {/* <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png")}
            /> */}
            {/* <i className="fa fa-home" style={{fontSize: '1.5em', marginRight: '10px'}} /> */}
          </a>
          Finest Living with Sleek and Chick
        </h4>
      </div>
    </>
  );
}

export default IndexHeader;
