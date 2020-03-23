import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer darkgrey-bg">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://twitter.com/home"
                  target="_blank"
                >
                  {/* Facebook */}
                  <i className="fa fa-2x fa-twitter" />
                  <p className="d-lg-none">Twitter</p>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  {/* Instagram */}
                  <i className="fa fa-2x fa-facebook-square" />
                  <p className="d-lg-none">Facebook</p>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                >
                  {/* Licenses */}
                  <i className="fa fa-2x fa-instagram" />
                  <p className="d-lg-none">Instagram</p>
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Meraj Housing
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
