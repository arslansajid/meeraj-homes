import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from 'reactstrap';
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

const Projects = () => {
    document.documentElement.classList.remove("nav-open");
    const [tab, selectedTab] = useState(1);
    useEffect(() => {
        console.log("######### Projects Page Rendered...")
    }, [])

    return (
        <>
            <div className="project-details">
                <div style={{
                    backgroundImage: "url(" + require("assets/img/bg.png") + ")"
                }}
                    className="page-bg"
                >
                    <ExamplesNavbar notHome={true} />
                    <Container>
                        <Row>
                            <Col lg={12}>
                            <h2 className="title my-3">INFRASTRUCTURE</h2>
                            <div className="my-5">
                                <span className="heading">Winding Roads</span>
                                <ul className="my-3">
                                    <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                     <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                     <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                </ul>
                            </div>
                            <div className="my-5">
                                <span className="heading">Sewerage</span>
                                <ul className="my-3">
                                     <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                     <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                     <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                </ul>
                            </div>
                            <div className="my-5">
                                <span className="heading">Underground wiring</span>
                                <ul className="my-3">
                                     <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                     <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                     <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                </ul>
                            </div>
                            <div className="my-5">
                                <span className="heading">Watersupply</span>
                                <ul className="my-3">
                                     <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                     <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                     <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                </ul>
                            </div>
                            <div className="my-5">
                                <span className="heading">Streetscapes</span>
                                <ul className="my-3">
                                     <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                     <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                     <li className="list-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </li>
                                </ul>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Projects;