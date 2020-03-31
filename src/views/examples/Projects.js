import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from 'reactstrap';
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';

const Projects = () => {
    document.documentElement.classList.remove("nav-open");
    const [tab, selectedTab] = useState(1);
    useEffect(() => {
        console.log("######### Projects Page Rendered...")
    }, [])

    const switchTab = (value) => {
        if (tab !== value) {
            selectedTab(value);
        }
    }
    return (
        <div className="lightgrey-bg">
            <ExamplesNavbar notHome={true} />
            {/* <ProfilePageHeader /> */}
            <Container className="py-5">
                <Row className="d-lg-flex d-none">
                    <Col className="mt-5" md="12">
                        <div className="tabs-container">
                            <Button onClick={() => switchTab(1)} className={tab === 1 ? "tab-selected blue-bg-btn" : "tab"}>MERAJ RESIDENTIAL PLOTS</Button>
                            <Button onClick={() => switchTab(2)} className={tab === 2 ? "tab-selected blue-bg-btn" : "tab"}>MERAJ AVENUE COMMERCIAL</Button>
                            <Button onClick={() => switchTab(3)} className={tab === 3 ? "tab-selected blue-bg-btn" : "tab"}>MERAJ HOMES</Button>
                            <Button onClick={() => switchTab(4)} className={tab === 4 ? "tab-selected blue-bg-btn" : "tab"}>MERAJ PARK APPARTMENTS</Button>
                            <Button onClick={() => switchTab(5)} className={tab === 5 ? "tab-selected blue-bg-btn" : "tab"}>MERAJ OVERSEAS BLOCK</Button>
                        </div>
                        <h3 className="title">
                            Projects {tab}
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-5" md="12">
                        <div className="d-lg-none d-md-none d-sm-none d-block">
                        <Accordion
                        // allowMultipleExpanded={true}
                        allowZeroExpanded={true}
                        >
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    MERAJ RESIDENTIAL PLOTS
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div>
                                    MERAJ RESIDENTIAL PLOTS
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    MERAJ AVENUE COMMERCIAL
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div>
                                    <div className="bold">
                                     MERAJ AVENUE COMMERCIAL
                                    </div>
                                    {'shipping costs: € 13, free return'}<br />
                                    delivery: 2-3 working days, free return of the goods possible within 30 days
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    MERAJ HOMES
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div>
                                    MERAJ HOMES
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                MERAJ PARK APPARTMENTS
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div>
                                    MERAJ PARK APPARTMENTS
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                MERAJ OVERSEAS BLOCK
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div>
                                    MERAJ OVERSEAS BLOCK
                                </div>
                            </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
            <DemoFooter />
        </div>
    )
}

export default Projects;