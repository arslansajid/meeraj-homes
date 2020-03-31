
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

const SocietyMaps = () => {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    window.scrollTo(0,0);
    document.body.classList.add("society-maps-page");
    return function cleanup() {
      document.body.classList.remove("society-maps-page");
    };
  });
  return (
    <>
      <ExamplesNavbar notHome={true} />
      <div className="section">
        <h1>Society Maps</h1>
      </div>
      <DemoFooter />
    </>
  );
}

export default SocietyMaps;
