import 'pure-react-carousel/dist/react-carousel.es.css';
import "./Carousel.scss";

import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import React, { useEffect, useState } from 'react';

import { CarouselProps } from "./Carousel.types";
import Icon from '../Icon/Icon';
import _ from 'lodash';
import { useResize } from '../useResize';

const Carousel: React.FC<CarouselProps> = ({ children, columns }) => {
    const { sizeIndex } = useResize();
    const [columnCount, updatecolumnCount] = useState(null);

    useEffect(() => {
        if (_.isNumber(columns))
            return;
        !columns[sizeIndex] ?
            updatecolumnCount(_.last(columns)) :
            updatecolumnCount(columns[sizeIndex]);
    }, [sizeIndex]);

    return <div className="Carousel">
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={400}
            totalSlides={children.length}
            isIntrinsicHeight
            visibleSlides={columnCount}
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
            <ButtonBack key="back" className="Carousel-button Carousel-back Button iconButton white shadow"><Icon icon="chevron-left" size={12} /></ButtonBack>
            <ButtonNext key="next" className="Carousel-button Carousel-next Button iconButton white shadow"><Icon icon="chevron-right" size={12} /></ButtonNext>
        </CarouselProvider>
    </div>
};

export default Carousel;

