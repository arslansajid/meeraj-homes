
import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
  Form,
  Container,
  Row,
  Col
} from "reactstrap";
import Swal from 'sweetalert2';

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

import DemoFooter from "components/Footers/DemoFooter.js";
import ContactDetails from 'components/ContactDetails/contact';

function AboutUs() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    Swal.fire(
      'Thank you!',
      'Your response has been submitted!',
      'success'
    )
  };

  return (
    <>
    <div className="contact-us">
      <div style={{
        backgroundImage: "url(" + require("assets/img/bg.png") + ")"
      }}
        className="page-bg"
      >
        <ExamplesNavbar notHome={true} />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg={12}>
              <h1 className="title my-3">CONTACT US</h1>
            </Col>
            <Col className="ml-auto mr-auto mt-2" md="12">
              <Form className="contact-form" onSubmit={e => onFormSubmit(e)}>
                <h2 className="text-center title color-white mb-4">GET IN TOUCH WITH US</h2>
                <Row>
                  <Col className="my-2" md="4">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          {/* <i className="nc-icon nc-single-02" /> */}
                          <i className="fa fa-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Name" type="text" required />
                    </InputGroup>
                  </Col>
                  <Col className="my-2" md="4">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          {/* <i className="nc-icon nc-email-85" /> */}
                          <i className="fa fa-envelope" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="text" required />
                    </InputGroup>
                  </Col>
                  <Col className="my-2" md="4">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          {/* <i className="nc-icon nc-android-85" /> */}
                          <i className="fa fa-phone" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Contact" type="text" required />
                    </InputGroup>
                  </Col>
                </Row>
                <Input
                  placeholder="Tell us your thoughts and feelings..."
                  type="textarea"
                  rows="8"
                  required
                  className="my-2"
                />
                <Row className="justify-content-center">
                  <Button className="" size="md">
                    Send Message
                    </Button>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    <DemoFooter dark={true} />
    </>
  );
}

export default AboutUs;
