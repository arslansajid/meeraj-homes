
import React, {useRef} from "react";

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
import DemoFooter from "components/Footers/DemoFooter.js";
import { Link } from "react-router-dom";
import ReactToPrint from 'react-to-print';

function ProfilePage() {
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

  const CardContent = (props) => {
    const { title, size, price, image } = props;
    const componentRef = useRef();
    return (
      <>
        <div
          className="payment-plan-card">
          <div className="payment-plan-print" ref={componentRef}>
          <div className="content-center">
            <h5 className="">{title}</h5>
            <h5 className="">{size}</h5>
            <img className="plot-image" src={require(`assets/img/plots/${image}.png`)} />

            <h4 className="py-2 my-3 bottom-border">{price}</h4>
          </div>
          <Row noGutters>
            <Col className="col-6">
              <div className="right-border p-3 text-center">
                5% <br />Booking Fee
              </div>
            </Col>
            <Col className="col-6">
              <div className="p-3 text-center">
                12 Quarterly
                Installments
              </div>
            </Col>
            <Col className="col-6">
              <div className="right-border top-border p-3 text-center">
                10% On <br />
                Confirmation <br />
                After 30 Days
              </div>
            </Col>
            <Col className="col-6">
              <div className="top-border p-3 text-center">
                10% On <br />
                Allocation <br />
                After 60 Days
              </div>
            </Col>
          </Row>
          </div>
          {/* className="payment-plan-buttons-container" */}
          <div style={{ display: "none" }}>
            <div className="w-100 h-100" ref={componentRef}>
              <img className="flyer" src={require("assets/img/flyer/flyer2.png")} />
            </div>
          </div>
          <Row noGutters className="pt-3">
            <Col className="col-6 w-100 px-2 payment-plan-buttons-container">
              <Link to="/view-society">
                <button className="w-100">View</button>
              </Link>
            </Col>
            <Col className="col-6 w-100 px-2 payment-plan-buttons-container">
              <ReactToPrint
                trigger={() => <button className="w-100">Print</button>}
                content={() => componentRef.current}
              />
            </Col>
          </Row>
        </div>
      </>
    )
  }

  return (
    <>
    <div className="payments section">
      <div style={{
        backgroundImage: "url(" + require("assets/img/bg.png") + ")"
      }}
      // className="page-bg"
      >
        <ExamplesNavbar notHome={true} />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg={12}>
              <div className="content-center">
                <h3 className="title my-3 text-center bottom-border">RESIDENTIAL PLOTS</h3>
              </div>
              <h4 className="title my-3 text-center">3 YEARS EASY INSTALLMENT PLAN</h4>
            </Col>
            <Col lg={12}>
              <h3 className="title my-4 text-center">QUARTERLY PAYMENT PLAN</h3>
              <Row className="my-3">
                <Col lg={4} md={6} className="mb-3 mb-lg-0">
                  <CardContent
                    title={"5 MARLA"}
                    price={"Rs. 3,250,000"}
                    image={5}
                    size={"(25 x 45)"}
                  />
                </Col>
                <Col lg={4} md={6} className="mb-3 mb-lg-0">
                  <CardContent
                    title={"10 MARLA"}
                    price={"Rs. 6,000,000"}
                    image={10}
                    size={"(37.5 x 60)"}
                  />
                </Col>
                <Col lg={4} md={6} className="mb-3 mb-lg-0">
                  <CardContent
                    title={"1 KANAL"}
                    price={"Rs. 12,000,000"}
                    image={1}
                    size={"(50 x 90)"}
                  />
                </Col>
              </Row>
              {/* <div className="monthly-payment-container">
              <div className="entrance-heading py-3">
                MONTHLY PAYMENT PLAN
              </div>
              <div className="p-3">
              <table className="monthly-payemnt-table w-100">
                  <tbody>
                    <tr>
                      <th>Plot SIze</th>
                      <th>5 Marla <br/>(25 x 45)</th>
                      <th>10 Marla <br/>(37.5 x 60)</th>
                      <th>1 Kanal <br/>(50 x 90)</th>
                      <th>Commercial Plot <br/>(50 x 90)</th>
                    </tr>
                    <tr>
                      <td>5% <br/>Booking Fee</td>
                      <td>162,500</td>
                      <td>19 mins</td>
                      <td>300,000</td>
                      <td>60,50,000</td>
                    </tr>
                    <tr>
                      <td>10% <br/>On confirmation after 30 days</td>
                      <td>162,500</td>
                      <td>300,000</td>
                      <td>162,500</td>
                      <td>32,50,000</td>
                    </tr>
                    <tr>
                      <td>10% <br/>On Allocation after 36 days</td>
                      <td>162,500</td>
                      <td>300,000</td>
                      <td>162,500</td>
                      <td>32,50,000</td>
                    </tr>
                    <tr>
                      <td>36 Monthly  <br/>Installments</td>
                      <td>162,500</td>
                      <td>300,000</td>
                      <td>162,500</td>
                      <td>32,50,000</td>
                    </tr>
                    <tr>
                      <td>Total Price</td>
                      <td>1162,500</td>
                      <td>300,000</td>
                      <td>162,500</td>
                      <td>32,50,000</td>
                    </tr>
                  </tbody>
                </table>
                </div>
            </div> */}
            </Col>
            <Col lg={12}>
              <div className="content-center">
                <h3 className="title my-4 text-center">MONTHLY PAYMENT PLAN</h3>
              </div>
              <Row className="my-3">
                <Col lg={4} md={6} className="mb-3 mb-lg-0">
                  <CardContent
                    title={"5 MARLA"}
                    price={"Rs. 3,250,000"}
                    image={5}
                    size={"(25 x 45)"}
                  />
                </Col>
                <Col lg={4} md={6} className="mb-3 mb-lg-0">
                  <CardContent
                    title={"10 MARLA"}
                    price={"Rs. 6,000,000"}
                    image={10}
                    size={"(37.5 x 60)"}
                  />
                </Col>
                <Col lg={4} md={6} className="mb-3 mb-lg-0">
                  <CardContent
                    title={"1 KANAL"}
                    price={"Rs. 12,000,000"}
                    image={1}
                    size={"(50 x 90)"}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    </>
  );
}

export default ProfilePage;
