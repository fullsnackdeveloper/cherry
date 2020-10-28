import "./Card.scss";

import React, { FC } from "react";

import { CardProps } from "./Card.types";
import clsx from "clsx";

const Card: FC<CardProps> = ({ title, category, image, type, size, author }: CardProps) => (
    <div className={clsx('Card', type, size)}>
        <div className="Card-image" style={{ backgroundImage: `url(${image})` }}>
            {size !== 'list' &&
                <div className="Card-image-content">
                    <div className="Card-image-content-category">
                        <span>{type === 'post' ? category : title}</span>
                    </div>
                </div>
            }
        </div>
        {type === 'post' &&
            <div>
                <h3 className="Card-title">{title}</h3>
                {author &&
                    <p>Originally contributed by {author}</p>
                }
            </div>
        }
    </div >
);

Card.defaultProps = {
    size: 'large',
    type: 'post'
}

export default Card;

