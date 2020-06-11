
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

const ViewSociety = () => {
  const [isCardHover, setIsCardHover] = useState([false, false]);

  const onMouseEnter = value => {
    if(value === 1) {
      let updated = [true, false]
      setIsCardHover([...updated])
    }
    if(value === 2) {
      let updated = [false, true]
      setIsCardHover([...updated])
    }
  };

  const onMouseLeave = value => {
    if(value === 1) {
      let updated = [false, false]
      setIsCardHover([...updated])
    }
    if(value === 2) {
      let updated = [false, false]
      setIsCardHover([...updated])
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    // window.scrollTo(0, 0);
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  return (
    <div className="view-society section">
      <ExamplesNavbar />
      <div style={{ marginTop: 50 }} className="gallery">
        <Container fluid>
          <Row>
            <Col
              lg={6}
              onMouseEnter={() => onMouseEnter(1)}
              onMouseLeave={() => onMouseLeave(1)}
            >
              <div
                className="w-100 h-100 flyer-container"
              >
                {isCardHover[0] && (
                <div className={"overlay"}>
                  <Button
                    alt='video-img'
                    className={"overlay-button"}
                  >
                    Print
                  </Button>
                </div>
              )}
                <img className="flyer" src={require("assets/img/flyer/flyer1.png")} />
              </div>
            </Col>
            <Col
              className=""
              lg={6}
              onMouseEnter={() => onMouseEnter(2)}
              onMouseLeave={() => onMouseLeave(2)}
            >

              <div
                className="w-100 h-100 flyer-container"
              >
                {isCardHover[1] && (
                  <div className={"overlay"}>
                    <Button
                      className={"overlay-button"}
                    >
                      Print
                  </Button>
                  </div>
                )}
                <img className="flyer" src={require("assets/img/flyer/flyer2.png")} />
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  );
}

export default ViewSociety;