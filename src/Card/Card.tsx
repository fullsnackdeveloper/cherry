import "./Card.scss";

import React, { FC } from "react";

import { CardProps } from "./Card.types";
import clsx from "clsx";

const Card: FC<CardProps> = ({ title, category, image, type, size }: CardProps) => (
    <div className={clsx('Card', type, size)}>
        <div className="Card-image" style={{ backgroundImage: `url(${image})` }}>
            <div className="Card-image-content">
                <div className="Card-image-content-category">
                    <span>{type === 'post' ? category : title}</span>
                </div>
            </div>
        </div>
        {type === 'post' &&
            <h3 className="Card-title">{title}</h3>
        }
    </div >
);

Card.defaultProps = {
    size: 'large',
    type: 'post'
}

export default Card;

