import React, { Component } from 'react';
import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';
import TalkText from './img/bg-talk-us.svg';
import PhotoMan from './img/contact-angel.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Parallax from 'parallax-js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TalkUs.sass';

const runParallax = () => {
    const scenes = document.querySelectorAll('.parallax-scene')

    for (const item of scenes) {
        let parallaxInstance = new Parallax(item)
    }
}

class TalkUs extends Component {
    componentDidMount(){
        runParallax();
        AOS.init();
    }
    render() {
        return (
            <section className="section section-talk-us body-content">
                <Container className="h-100">
                    <div className="position-absolute parallax-scene">
                        <img data-depth="0.6" src={TalkText} className="bg-text"></img> 
                    </div>
                    <Row className="py-5 h-100 justify-content-between align-items-end">
                        <Col xs={12} lg={6} className="position-relative">
                            <div className="photo-man parallax-scene">
                                <img data-depth="0.1" src={PhotoMan} className="img-fluid"></img>
                            </div>
                        </Col>

                        <Col xs={12} lg={6}>
                            <div className="info-contact d-flex flex-column justify-content-end">
                                <h5 className="text-right">INFO CONTACT</h5>
                                <Nav className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link className="pl-0">
                                            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                                            <span className="text-info">(+57 3102627655)</span>
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link className="pl-0">
                                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                            <span className="text-info">angelpublicista.1@gmail.com</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="contact-form">
                                <Form>
                                    <Form.Group>
                                        <Form.Control type="text"  placeholder="Nombre*" required/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control type="email"  placeholder="Correo*" required/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control type="number"  placeholder="Celular / Whatsapp*" required/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control as="textarea"  placeholder="Mensaje" rows={3} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Check type="checkbox"  label="Acepto las políticas de privacidad" required/>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="btn-block">
                                        ENVIAR MENSAJE
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default TalkUs;