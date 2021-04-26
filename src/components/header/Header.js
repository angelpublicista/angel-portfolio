import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './header.sass';
import Logo from './img/logo-angel.svg';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="py-4 header-app">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col></Col>
                        <Col className="text-center">
                            <a href="#"><img src={Logo}></img></a>
                        </Col>
                        <Col className="text-right">
                            <Nav className="justify-content-end">
                                <Nav.Item>
                                    <NavLink to="/" exact  className="nav-link" activeClassName="active">
                                       ABOUT ME
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink to="/portfolio"  className="nav-link" activeClassName="active">
                                       PORTFOLIO
                                    </NavLink>
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
