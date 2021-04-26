import React, { Component } from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function NextArrow(props) {
    const { onClick } = props;
    return (
        <button className="custom-arrow next-arrow"  onClick={onClick}>
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20.6296" cy="20.3704" r="19.8704" stroke="#FFDD33"/>
                <g clip-path="url(#clip0)">
                <path d="M26.0228 19.9464L18.8871 12.8106C18.6508 12.5825 18.2744 12.589 18.0462 12.8253C17.8237 13.0557 17.8237 13.421 18.0462 13.6514L24.7616 20.3668L18.0462 27.0821C17.8141 27.3143 17.8141 27.6908 18.0462 27.923C18.2785 28.1551 18.6549 28.1551 18.8871 27.923L26.0228 20.7872C26.255 20.555 26.255 20.1786 26.0228 19.9464Z" fill="#FFDD33"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="15.4534" height="15.4534" fill="white" transform="translate(14.3079 12.6437)"/>
                </clipPath>
                </defs>
            </svg>
        </button>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="custom-arrow prev-arrow" onClick={onClick}>
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="19.8704" transform="matrix(-1 0 0 1 20.6296 20.3704)" stroke="#FFDD33"/>
                <g clip-path="url(#clip0)">
                <path d="M15.2364 19.9464L22.3722 12.8106C22.6084 12.5825 22.9849 12.589 23.213 12.8253C23.4356 13.0557 23.4356 13.421 23.213 13.6514L16.4977 20.3668L23.213 27.0821C23.4452 27.3143 23.4452 27.6908 23.213 27.923C22.9808 28.1551 22.6044 28.1551 22.3722 27.923L15.2364 20.7872C15.0043 20.555 15.0043 20.1786 15.2364 19.9464Z" fill="#FFDD33"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="15.4534" height="15.4534" fill="white" transform="matrix(-1 0 0 1 26.9514 12.6437)"/>
                </clipPath>
                </defs>
            </svg>
        </button>
    );
}

class SliderPortfolio extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />,
            centerMode: true,
            autoplay: true,
            centerPadding: '150px'
        };
        return (
            <Slider className="slick-portfolio" {...settings}>
                <a href="#" className="item-portfolio" target="_blank">
                    <figure>
                        <img src="https://picsum.photos/800/1000"></img>
                        <figcaption>
                            <span className="item-portfolio__icon">
                                <FontAwesomeIcon icon={faLink} />
                            </span>
                            <h5 className="item-portfolio__title">WEB APP</h5>       
                        </figcaption>
                    </figure>
                </a>

                <a href="#" className="item-portfolio" target="_blank">
                    <figure>
                        <img src="https://picsum.photos/800/1000"></img>
                        <figcaption>
                            <span className="item-portfolio__icon">
                                <FontAwesomeIcon icon={faLink} />
                            </span>
                            <h5 className="item-portfolio__title">WEB APP</h5>       
                        </figcaption>
                    </figure>
                </a>

                <a href="#" className="item-portfolio" target="_blank">
                    <figure>
                        <img src="https://picsum.photos/800/1000"></img>
                        <figcaption>
                            <span className="item-portfolio__icon">
                                <FontAwesomeIcon icon={faLink} />
                            </span>
                            <h5 className="item-portfolio__title">WEB APP</h5>       
                        </figcaption>
                    </figure>
                </a>

                <a href="#" className="item-portfolio" target="_blank">
                    <figure>
                        <img src="https://picsum.photos/800/1000"></img>
                        <figcaption>
                            <span className="item-portfolio__icon">
                                <FontAwesomeIcon icon={faLink} />
                            </span>
                            <h5 className="item-portfolio__title">WEB APP</h5>       
                        </figcaption>
                    </figure>
                </a>

            </Slider>
        );
    }
}

export default SliderPortfolio;