
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
} from "reactstrap";

const ExamplesNavbar = (props) => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
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

  React.useEffect(() => {
    console.log("#########", props)
    const updateNavbarColor = () => {
      if(props.notHome) { //this is to control navbar on routes other than home
        if (
          document.documentElement.scrollTop > 40 ||
          document.body.scrollTop > 40
        ) {
          setNavbarColor("");
          setShowLogo(true)
        } else if (
          document.documentElement.scrollTop < 40 ||
          document.body.scrollTop < 40
        ) {
          setNavbarColor("navbar-transparent");
          setShowLogo(false)
        }
      } else {
        if (
          document.documentElement.scrollTop > 299 ||
          document.body.scrollTop > 299
        ) {
          setNavbarColor("");
          setShowLogo(true)
        } else if (
          document.documentElement.scrollTop < 300 ||
          document.body.scrollTop < 300
        ) {
          setNavbarColor("navbar-transparent");
          setShowLogo(false)
        }
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
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
            <div className={`${showLogo ? "d-block" : "d-none"}`} style={{borderRadius: '2px'}}>
              <Link to="/">
                <div className="logo-container left-logo">
                  <img className="logo" src={require("assets/img/logo25_25.png")} />
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
                <img className="logo sidebar-logo" src={require("assets/img/logo25_25.png")} />
              </div>
            </Link>
              <NavItem
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
              </NavItem>
            <NavItem>
              <NavLink to="/projects" tag={Link}>
                <i className="nc-icon nc-bank" /> Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about-us" tag={Link}>
                <i className="nc-icon nc-book-bookmark" /> About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/payments" tag={Link}>
                <i className="nc-icon nc-book-bookmark" /> Payments
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default withRouter(ExamplesNavbar);
