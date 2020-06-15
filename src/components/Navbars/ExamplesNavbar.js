
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
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const ExamplesNavbar = (props) => {
  // const [navbarColor, setNavbarColor] = React.useState(props.notHome ? "" : "navbar-transparent");
  const [navbarColor, setNavbarColor] = React.useState("");
  const [showLogo, setShowLogo] = React.useState(false);
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const scrollToContactForm = () => {
    console.log("navbar formRef", props)
    props.formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // React.useEffect(() => {
  //   console.log("#########", props)
  //   const updateNavbarColor = () => {
  //     if (!props.notHome) { //this is to control navbar on routes other than home
  //       if (
  //         document.documentElement.scrollTop > 299 ||
  //         document.body.scrollTop > 299
  //       ) {
  //         setNavbarColor("");
  //         setShowLogo(true)
  //       } else if (
  //         document.documentElement.scrollTop < 300 ||
  //         document.body.scrollTop < 300
  //       ) {
  //         setNavbarColor("navbar-transparent");
  //         setShowLogo(false)
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", updateNavbarColor);

  //   return function cleanup() {
  //     window.removeEventListener("scroll", updateNavbarColor);
  //   };
  // });
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
            {/* <NavbarBrand
            data-placement="bottom"
            to="/"
            tag={Link}
          > */}
            {/* <div className={`${showLogo || props.notHome ? "d-block" : "d-none"}`} style={{ borderRadius: '2px' }}> */}
            <div>
              <Link to="/">
                <div className="logo-container left-logo">
                  <img className="logo" src={require("assets/img/navlogo@2x.png")} />
                </div>
              </Link>
            </div>
            {/* </NavbarBrand> */}
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
                <img className="logo sidebar-logo" src={require("assets/img/white25.png")} />
              </div>
            </Link>
            {/* <NavItem
              id="get-in-touch-btn"
            >
              <Link to={props.match.path === "/contact-us" ? "/" : "/contact-us"}>
                <Button
                  className="btn-round"
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
            </NavItem> */}
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
            <NavItem>
              <NavLink to="/projects" tag={Link}>
                Project Details
              </NavLink>
            </NavItem>
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
            <NavItem>
              <NavLink to="/infrastructure" tag={Link}>
                INFRASTRUCTURE
              </NavLink>
            </NavItem>
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
