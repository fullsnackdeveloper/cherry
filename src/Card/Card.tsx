import "./Card.scss";

import React, { FC } from "react";

import { CardProps } from "./Card.types";
import ConditionalWrapper from "../ConditionalWrapper";
import Icon from "../Icon/Icon";
import ToolTip from "../ToolTip/ToolTip";
import clsx from "clsx";

const Card: FC<CardProps> = ({ title, category, image, type, size, author, icon, iconMessage }: CardProps) => (
    <div className={clsx('Card', type, size)}>
        {icon &&
            <div className="Card-image-icon">
                <ConditionalWrapper conditional={iconMessage} wrapper={children => <ToolTip message={iconMessage}>{children}</ToolTip>}>
                    <Icon icon={icon} />
                </ConditionalWrapper>
            </div>
        }
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
    type: 'post',
    image: 'https://elementor.com/blog/wp-content/uploads/sites/9/2020/05/Custom-WordPress-404-Page-01-1024x536.png'
}

export default Card;

