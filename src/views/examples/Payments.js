
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
              <h2>Payments</h2>
              <h5 className="heading-grey mt-5 mb-4">
                Housing Societies
              </h5>

              <table className="table">
                <tr>
                  <th>Project</th>
                  <th>Installments</th>
                  <th>Client</th>
                  <th>Project Description</th>
                </tr>
                <tr>
                  <td>Engineering University Employees Cooperative Housing Society, Lahore</td>
                  <td>6000</td>
                  <td>University of Engineering and Technology, Lahore</td>
                  <td>Detailed Design of Road works and Structures, Bill of Quantities and Specifications</td>
                </tr>
                <tr>
                  <td>Hostels for Oil Field Company</td>
                  <td>2000</td>
                  <td>Ikan</td>
                  <td>Detailed Design of Structures, Bill of Quantities and Specifications.</td>
                </tr>
              </table>

              <h5 className="heading-grey mt-5 mb-4">
                Studies
              </h5>

              <table className="table">
                <tr>
                  <th>Project</th>
                  <th>Installments</th>
                  <th>Client</th>
                  <th>Project Description</th>
                </tr>
                <tr>
                  <td>Engineering University Employees Cooperative Housing Society, Lahore</td>
                  <td>5000</td>
                  <td>University of Engineering and Technology, Lahore</td>
                  <td>Detailed Design of Road works and Structures, Bill of Quantities and Specifications</td>
                </tr>
                <tr>
                  <td>Hostels for Oil Field Company</td>
                  <td>25000</td>
                  <td>Ikan</td>
                  <td>Detailed Design of Structures, Bill of Quantities and Specifications.</td>
                </tr>
              </table>

              <h5 className="heading-grey mt-5 mb-4">
                Underground Oil Storage Tanks
              </h5>

              <table className="table">
                <tr>
                  <th>Project</th>
                  <th>Installments</th>
                  <th>Client</th>
                  <th>Project Description</th>
                </tr>
                <tr>
                  <td>Engineering University Employees Cooperative Housing Society, Lahore</td>
                  <td>2000</td>
                  <td>University of Engineering and Technology, Lahore</td>
                  <td>Detailed Design of Road works and Structures, Bill of Quantities and Specifications</td>
                </tr>
                <tr>
                  <td>Hostels for Oil Field Company</td>
                  <td>8000</td>
                  <td>Ikan</td>
                  <td>Detailed Design of Structures, Bill of Quantities and Specifications.</td>
                </tr>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
