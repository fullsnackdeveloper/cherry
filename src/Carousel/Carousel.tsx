import 'pure-react-carousel/dist/react-carousel.es.css';
import "./Carousel.scss";

import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';

import Button from '../Button/Button';
import { CarouselProps } from "./Carousel.types";
import React from 'react';

const Carousel: React.FC<CarouselProps> = ({ children }) => (
    <div className="Carousel">
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={400}
            totalSlides={children.length}
            isIntrinsicHeight
            visibleSlides={5}
        >
            <Slider key="slider">
                {children.map((child, index) => {
                    return <Slide key={index} index={index}>
                        <div className="Carousel-slide-container">
                            {child}
                        </div>
                    </Slide>
                })}
            </Slider>
            <ButtonBack key="back" className="Carousel-button Carousel-back"><Button type="white" shadow icon="chevron-left" /></ButtonBack>
            <ButtonNext key="next" className="Carousel-button Carousel-next"><Button type="white" shadow icon="chevron-right" /></ButtonNext>
        </CarouselProvider>
    </div>
);

export default Carousel;

