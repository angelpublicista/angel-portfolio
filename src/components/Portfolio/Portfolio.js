import React, { Component } from 'react';
import PortfolioText from './img/bg-portfolio.svg';
import { Container, Row, Col } from 'react-bootstrap';
import SliderPortfolio from './SliderPortfolio';
import './Portfolio.sass';
import Parallax from 'parallax-js';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const runParallax = () => {
    const scenes = document.querySelectorAll('.parallax-scene')

    for (const item of scenes) {
        let parallaxInstance = new Parallax(item)
    }
}


class Portfolio extends Component {
    componentDidMount(){
        runParallax();
        AOS.init();
    }
    
    render() {
        return (
            <section className="section">
                <Container>
                    <div className="position-absolute parallax-scene">
                        <img data-depth="0.6" src={PortfolioText} className="bg-text"></img>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <SliderPortfolio />
                    </div>  
                </Container>
            </section>
        );
    }
}

export default Portfolio;