
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
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    window.scrollTo(0,0);
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <Container>
        <Row>
          <Col md="12">
            <div className="section profile-content">
              <h3 className="heading-grey title mt-5 mb-4">
                Property Types
              </h3>

              <div className="mb-3">
                <h5 className="title">Residential Plots</h5>
                <Row className="payment-row py-2">
                  <Col xs="3" md="3" lg="2"><i className="fa fa-cube" /> Area</Col>
                  <Col xs="9" md="9" lg="8">10 Marla  2250 sqft</Col>
                </Row>

                <Row className="payment-row py-2">
                  <Col xs="3" md="3" lg="2"><i className="nc-icon nc-money-coins" /> Price</Col>
                  <Col xs="9" md="9" lg="8">123 lac</Col>
                </Row>
              </div>

              <div className="mb-3">
                <h5 className="title">Residential Plots</h5>
                <Row className="payment-row py-2">
                  <Col xs="3" md="3" lg="2"><i className="fa fa-cube" /> Area</Col>
                  <Col xs="9" md="9" lg="8">5 Marla   1125 sq ft</Col>
                </Row>

                <Row className="payment-row py-2">
                  <Col xs="3" md="3" lg="2"><i className="nc-icon nc-money-coins" /> Price</Col>
                  <Col xs="9" md="9" lg="8">123 lac</Col>
                </Row>
              </div>

              <div className="mb-3">
                <h5 className="title">Residential Plots</h5>
                <Row className="payment-row py-2">
                  <Col xs="3" md="3" lg="2" ><i className="fa fa-cube" /> Area</Col>
                  <Col xs="9" md="9" lg="8">20 Marla 4500 sq ft</Col>
                </Row>

                <Row className="payment-row py-2">
                  <Col xs="3" md="3" lg="2" ><i className="nc-icon nc-money-coins" /> Price</Col>
                  <Col xs="9" md="9" lg="8">123 lac</Col>
                </Row>

                <h5 className="title">Commercial Plots</h5>
                <Row className="payment-row py-2">
                  <Col xs="3" md="3" lg="2" ><i className="fa fa-cube" /> Area</Col>
                  <Col xs="9" md="9" lg="8">10 Marla  2250 sqft</Col>
                </Row>

                <Row className="payment-row py-2">
                  <Col xs="3" md="3" lg="2" ><i className="nc-icon nc-money-coins" /> Price</Col>
                  <Col xs="9" md="9" lg="8">123 lac</Col>
                </Row>
              </div>

              <div className="mb-3">
                <h5 className="title">Commercial Plots</h5>
                <Row className="payment-row py-2">
                  <Col xs="3" md="3" lg="2" ><i className="fa fa-cube" /> Area</Col>
                  <Col xs="9" md="9" lg="8">5 Marla   1125 sq ft</Col>
                </Row>

                <Row className="payment-row py-2">
                  <Col xs="3" md="3" lg="2" ><i className="nc-icon nc-money-coins" /> Price</Col>
                  <Col xs="9" md="9" lg="8">123 lac</Col>
                </Row>
              </div>

              <div className="mb-3">
                <h5 className="title">Commercial Plots</h5>
                <Row className="payment-row py-2">
                  <Col xs="3" md="3" lg="2" ><i className="fa fa-cube" /> Area</Col>
                  <Col xs="9" md="9" lg="8">20 Marla 4500 sq ft</Col>
                </Row>

                <Row className="payment-row py-2">
                  <Col xs="3" md="3" lg="2" ><i className="nc-icon nc-money-coins" /> Price</Col>
                  <Col xs="9" md="9" lg="8">123 lac</Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
