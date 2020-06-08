
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
    <div className="">
      <ExamplesNavbar notHome={true} />
      <Container>
        <Row>
          <Col lg={12}>
            <div className="monthly-payment-container">
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
            </div>
          </Col>
        </Row>
      </Container>
      <DemoFooter />
    </div>
  );
}

export default ProfilePage;
