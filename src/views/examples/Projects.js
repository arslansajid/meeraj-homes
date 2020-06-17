import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from 'reactstrap';
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ItemsCarousel from 'react-items-carousel';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Projects = () => {
    document.documentElement.classList.remove("nav-open");
    const [activeItemIndex, setactiveItemIndex] = useState(0)
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
                                <h1 className="title my-3">PROJECT DETAILS</h1>
                                <div className="my-5">
                                    <div className="heading">Salient Features Of Our Project</div>
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
                                    <div className="heading">Importance Of Our Prime Location</div>
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
                    <div className="section-light">
                        <h2 className="my-3 text-center">TYPES OF PLOTS</h2>
                        <Container className="">
                            <Row>
                                <div className="col-4">
                                    <div style={{ background: '#B5A194' }} className="plot-card">
                                        <h3 className="text-center">RESIDENTIAL </h3>
                                        <h4 className="text-center">5 Marla </h4>
                                        <h4 className="text-center">10 Marla </h4>
                                        <h4 className="text-center">1 Kanal </h4>
                                        <div style={{ background: '#9D948B' }} className="detail content-center">
                                            Under Construction
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div style={{ background: '#E8E5E0' }} className="plot-card">
                                        <h3 className="text-center">COMMERCIAL </h3>
                                        <h4 className="text-center">Types </h4>
                                        <div style={{ background: '#B5A194' }} className="detail content-center">
                                            Under Construction
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div style={{ background: '#9D948B' }} className="plot-card">
                                        <h3 className="text-center">RETAIL PARK</h3>
                                        <h4 className="text-center">Types </h4>
                                        <div style={{ background: '#E8E5E0' }} className="detail content-center">
                                            Under Construction
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                        {/* <div className="d-lg-none d-md-none d-block project-carousel">
                        <ItemsCarousel
                            outsideChevron={true}
                            leftChevron={<button className="carousel-arrow-btn">
                                <i className="fa fa-chevron-left left" />
                            </button>}
                            rightChevron={<button className="carousel-arrow-btn">
                                <i className="fa fa-chevron-right right" />
                            </button>}
                            infiniteLoop={true}
                            activePosition={'center'}
                            chevronWidth={30}
                            disableSwipe={false}
                            alwaysShowChevrons={true}
                            numberOfCards={1}
                            slidesToScroll={1}
                            showSlither={false}
                            firstAndLastGutter={false}
                            activeItemIndex={activeItemIndex}
                            requestToChangeActive={value => setactiveItemIndex(value)}
                        >
                            <div style={{ background: '#B5A194' }} className="plot-card">
                                <h3 className="text-center">RESIDENTIAL </h3>
                                <h4 className="text-center">5 Marla </h4>
                                <h4 className="text-center">10 Marla </h4>
                                <h4 className="text-center">1 Kanal </h4>
                                <div style={{ background: '#9D948B' }} className="detail content-center">
                                    Under Construction
                                </div>
                            </div>
                            <div style={{ background: '#E8E5E0' }} className="plot-card">
                                <h3 className="text-center">COMMERCIAL </h3>
                                <h4 className="text-center">Types </h4>
                                <div style={{ background: '#B5A194' }} className="detail content-center">
                                    Under Construction
                                </div>
                            </div>
                            <div style={{ background: '#9D948B' }} className="plot-card">
                                <h3 className="text-center">RETAIL PARK</h3>
                                <h4 className="text-center">Types </h4>
                                <div style={{ background: '#E8E5E0' }} className="detail content-center">
                                    Under Construction
                                </div>
                            </div>
                        </ItemsCarousel>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;