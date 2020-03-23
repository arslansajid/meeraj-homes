
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
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const scrollToContactForm = () => {
    console.log("navbar formRef", props)
    // window.scrollTo(0, props.formRef.current.offsetHeight);
    props.formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
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
          <NavbarBrand
            data-placement="bottom"
            to="/"
            tag={Link}
          >
            <div className="d-flex justify-content-center align-items-center">
              <div className="logo-container left-logo" style={{marginRight: '10px'}}>
                <img className="logo" src={require("assets/img/logo_png.png")} />
              </div>
              <div className="text-center">Meraj Housing</div>
            </div>
          </NavbarBrand>
          <div className="logo-container center-logo">
            <img className="logo" src={require("assets/img/logo_png.png")} />
          </div>
          <div className="d-flex">
            <Button
              className="btn-round navbar-toggler"
              color="danger"
              onClick={() => scrollToContactForm()}
            >
              Get In Touch
            </Button>
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
          </div>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
          <div className="logo-container navbar-toggler">
            <img className="logo sidebar-logo" src={require("assets/img/logo_png.png")} />
          </div>
            {props.location.pathname === '/' &&
              <NavItem id="get-in-touch-btn">
                <Button
                  className="btn-round"
                  color="danger"
                  onClick={() => scrollToContactForm()}
                >
                  Get In Touch
                </Button>
              </NavItem>
            }
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
            {/* <NavItem>
              <NavLink to="/contact-us" tag={Link}>
                <i className="nc-icon nc-layout-11" /> Contact Us
              </NavLink>
            </NavItem> */}
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
