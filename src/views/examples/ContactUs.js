
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
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
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
    window.scrollTo(0,0);
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
    <div className="lightgrey-bg">
      <ExamplesNavbar notHome={true} />
      {/* <ProfilePageHeader /> */}
      <Container className="py-5">
        <Row>
          <Col className="ml-auto mr-auto mt-5" md="8">
            <h2 className="text-center title mt-5">Keep in touch?</h2>
            <Form className="contact-form" onSubmit={e => onFormSubmit(e)}>
              <Row>
                <Col md="6">
                  <label>Name</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="text" required />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Email</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="text" required />
                  </InputGroup>
                </Col>
              </Row>
              <label>Message</label>
              <Input
                placeholder="Tell us your thoughts and feelings..."
                type="textarea"
                rows="4"
                required
              />
              <Row className="justify-content-center">
                {/* <Col className="ml-auto mr-auto" md="4"> */}
                  <Button className="btn-fill blue-bg-btn" size="md">
                    Send Message
                      </Button>
                {/* </Col> */}
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <ContactDetails />
      <DemoFooter />
    </div>
  );
}

export default AboutUs;
