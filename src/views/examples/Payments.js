
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
                      <td>Daska</td>
                      <td>3 km</td>
                      <td>5 mins</td>
                      <td>3 km</td>
                      <td>5 mins</td>
                    </tr>
                    <tr>
                      <td>Lahore</td>
                      <td>100 km</td>
                      <td>41 mins</td>
                      <td>3 km</td>
                      <td>5 mins</td>
                    </tr>
                    <tr>
                      <td>Sialkot Airport</td>
                      <td>22 km</td>
                      <td>20 mins</td>
                      <td>3 km</td>
                      <td>5 mins</td>
                    </tr>
                    <tr>
                      <td>Wazirabad road Sambrial </td>
                      <td>13 km</td>
                      <td>12 mins</td>
                      <td>3 km</td>
                      <td>5 mins</td>
                    </tr>
                    <tr>
                      <td>Ugoki</td>
                      <td>18 km</td>
                      <td>19 mins</td>
                      <td>3 km</td>
                      <td>5 mins</td>
                    </tr>
                    <tr>
                      <td>Sialkot</td>
                      <td>16 km</td>
                      <td>17 mins</td>
                      <td>3 km</td>
                      <td>5 mins</td>
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
