
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

const Amenities = () => {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    window.scrollTo(0,0);
    document.body.classList.add("amenities-page");
    return function cleanup() {
      document.body.classList.remove("amenities-page");
    };
  });
  return (
    <>
      <ExamplesNavbar notHome={true} />
      <div className="section">
        <h1>Amenities</h1>
      </div>
      <DemoFooter />
    </>
  );
}

export default Amenities;
