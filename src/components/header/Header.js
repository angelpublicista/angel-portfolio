import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './header.sass';
import Logo from './img/logo-angel.svg';

class Header extends Component {
    render() {
        return (
            <header className="py-4 header-app">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col></Col>
                        <Col className="text-center">
                            <img src={Logo}></img>
                        </Col>
                        <Col className="text-right">
                            <Nav className="justify-content-end">
                                <Nav.Item>
                                    <Nav.Link className="active">ABOUT ME</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link>PORTFOLIO</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link>TALK US</Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </header>
        );
    }
}

export default Header;
