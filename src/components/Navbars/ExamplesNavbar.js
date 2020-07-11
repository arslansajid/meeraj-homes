
import React from "react";
import { Link, withRouter } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
  UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";

const ExamplesNavbar = (props) => {
  // const [navbarColor, setNavbarColor] = React.useState(props.notHome ? "" : "navbar-transparent");
  const [navbarColor, setNavbarColor] = React.useState("");
  const [showLogo, setShowLogo] = React.useState(false);
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const scrollToContactForm = () => {
    console.log("navbar formRef", props)
    props.formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const onMouseEnter = () => {
    setDropdownOpen(true);
  };

  const onMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container fluid>
        <div className="navbar-translate">
          <div className="header-left d-flex">
            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse
              })}
              onClick={toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
            <div>
              <Link to="/">
                <div className="logo-container left-logo">
                  <img className="logo" src={require("assets/resources/logo.svg")} />
                </div>
              </Link>
            </div>
          </div>
          <div className="d-flex mr-3">
            <Link to={props.match.path === "/" ? "/contact-us" : "/"}>
              <Button
                className="btn-round navbar-toggler"
              >
                {
                  props.match.path === "/contact-us"
                    ?
                    "Home"
                    :
                    "Get In Touch"
                }
              </Button>
            </Link>
          </div>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <Link to="/">
              <div className="logo-container navbar-toggler">
                {/* <img className="logo sidebar-logo" src={require("assets/img/white25.png")} /> */}
                <img style={{
                  width: 150,
                  height: 150,
                  objectFit: 'cover'
                }} src={require("assets/img/logo@2x.png")} />
              </div>
            </Link>
            <NavItem>
              <NavLink to="/" tag={Link}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about-us" tag={Link}>
                About Us
              </NavLink>
            </NavItem>
            {/* <NavItem
              to="/projects"
              tag={Link}
            >
              <NavLink>
                Project Details
              </NavLink>
            </NavItem> */}
            {/* Drop down starts */}
            <UncontrolledDropdown
              onMouseEnter={() => onMouseEnter()}
              onMouseLeave={() => onMouseLeave()}
              isOpen={dropdownOpen} nav inNavbar>
              <DropdownToggle nav onClick={() => window.location.replace('/projects')}>
                Project Details
                </DropdownToggle>
              <DropdownMenu down>
                <DropdownItem>
                  INFRASTRUCTURE
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  NEWS
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* Drop down ends */}
            <NavItem>
              <NavLink to="/amenities" tag={Link}>
                Amenities
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/payments" tag={Link}>
                Payment Plan
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/society-maps" tag={Link}>
                Project Maps
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/gallery" tag={Link}>
                Gallery
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink to="/infrastructure" tag={Link}>
                INFRASTRUCTURE
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink to="/public-notice" tag={Link}>
                Public Notices
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact-us" tag={Link}>
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default withRouter(ExamplesNavbar);
