import React, { Component } from 'react';
import Slider from "react-slick";
import ArrowNext from './img/arrow-next.svg';
import ArrowPrev from './img/arrow-prev.svg';

function NextArrow(props) {
    const { onClick } = props;
    return (
        <button className="custom-arrow next-arrow"  onClick={onClick}><img src={ArrowNext} /></button>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="custom-arrow prev-arrow" onClick={onClick}><img src={ArrowPrev} /></button>
    );
}

class SliderExperience extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />,
        };
        return (
            <Slider className="slick-experiences" {...settings}>
                <div>
                    <h5><i>CEO Founder Geniorama</i></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida aliquet imperdiet nunc tempus, amet, nec ut felis facilisis. </p>
                </div>
                <div>
                <h5><i>CEO Founder Geniorama</i></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida aliquet imperdiet nunc tempus, amet, nec ut felis facilisis. </p>
                </div>
                <div>
                <h5><i>CEO Founder Geniorama</i></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida aliquet imperdiet nunc tempus, amet, nec ut felis facilisis. </p>
                </div>
            </Slider>
        );
    }
}

export default SliderExperience;