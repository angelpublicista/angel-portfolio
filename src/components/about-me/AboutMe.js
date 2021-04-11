import React, { Component } from 'react';
import AboutText from './img/about-me.svg';
import { Container, Row, Col } from 'react-bootstrap';
import './about-me.sass';
import Photo from './img/photo.jpg';
import SliderExperience from './SliderExperience';

class AboutMe extends Component {
    render() {
        return (
            <section className="section">
                <Container>
                    <img src={AboutText} className="bg-text"></img> 
                    <Row className="py-5">
                        <Col xs={12} lg={5} className="section-name">
                            <h4>Hello</h4>
                            <h2>I'm Angel Burgos</h2>
                            <hr className="divider-name"></hr>
                            <h5 className="title-role">WEB DEVELOPER</h5>
                        </Col>

                        <Col xs={12} lg={7} className="p-lg-0">
                            <Row className="align-items-end">
                                <Col xs={12} lg={6} className="p-lg-0">
                                    <img className="img-fluid" src={Photo}></img>
                                </Col>
                                <Col xs={12} lg={6} className="px-lg-5">
                                    <h3 className="mb-4 title-experience">MY EXPERIENCE</h3>

                                    <SliderExperience />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default AboutMe;