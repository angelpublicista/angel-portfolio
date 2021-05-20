import React, { Component } from 'react';
import AboutText from './img/about-me.svg';
import { Container, Row, Col } from 'react-bootstrap';
import './about-me.sass';
import Photo from './img/photo.jpg';
import SliderExperience from './SliderExperience';
import Parallax from 'parallax-js';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const runParallax = () => {
    const scenes = document.querySelectorAll('.parallax-scene')

    for (const item of scenes) {
        let parallaxInstance = new Parallax(item)
    }
}

class AboutMe extends Component {
    componentDidMount(){
        runParallax();
        AOS.init();
    }
    render() {
        return (
            <section className="section body-content">
                <Container className="h-100">
                    <div className="position-absolute parallax-scene">
                        <img data-depth="0.6" src={AboutText} className="bg-text"></img> 
                    </div>
                    <Row className="py-5 h-100 align-items-center">
                        <Col xs={12} lg={5} className="section-name" data-aos="fade-right" data-aos-duration="1000">
                            <h4>Hello</h4>
                            <h2>I'm Angel Burgos</h2>
                            <hr className="divider-name"></hr>
                            <h5 className="title-role">WEB DEVELOPER</h5>
                        </Col>

                        <Col xs={12} lg={7} className="p-lg-0" data-aos="fade-left" data-aos-duration="1000">
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