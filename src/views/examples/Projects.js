import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Container, Row, Col } from 'reactstrap';
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

const Projects = () => {
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
                <Row>
                    <Col className="mt-5" md="12">
                        <div className="tabs-container d-lg-flex d-none">
                            <Button onClick={() => switchTab(1)} className={tab === 1 ? "tab-selected" : "tab"}>MERAJ RESIDENTIAL PLOTS</Button>
                            <Button onClick={() => switchTab(2)} className={tab === 2 ? "tab-selected" : "tab"}>MERAJ AVENUE COMMERCIAL</Button>
                            <Button onClick={() => switchTab(3)} className={tab === 3 ? "tab-selected" : "tab"}>MERAJ HOMES</Button>
                            <Button onClick={() => switchTab(4)} className={tab === 4 ? "tab-selected" : "tab"}>MERAJ PARK APPARTMENTS</Button>
                            <Button onClick={() => switchTab(5)} className={tab === 5 ? "tab-selected" : "tab"}>MERAJ OVERSEAS BLOCK</Button>
                        </div>
                    </Col>
                </Row>
                    <Row>
                        <Col>
                            <h3 className="title">
                                Projects {tab}
                            </h3>
                        </Col>
                    </Row>
            </Container>
            <DemoFooter />
        </div>
    )
}

export default Projects;