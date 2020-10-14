import "./ActionCard.scss";

import React, { FC } from "react";

import { ActionCardProps } from "./ActionCard.types";
import Icon from "../Icon/Icon";
import clsx from "clsx";

const ActionCard: FC<ActionCardProps> = ({ title, icon, link, linkText, image, size, color }: ActionCardProps) => (
    <div className={clsx("ActionCard", size, { withIcon: icon })} style={{ background: color }}>
        <div className="ActionCard-content">
            {icon &&
                <Icon icon={icon} size={32} />
            }
            <h3>{title}</h3>
            <a href={link}>{linkText}<Icon icon="chevron-right" size={16} /></a>
        </div>
        {size !== 'small' &&
            <div className="ActionCard-image" style={{ backgroundImage: `url(${image})` }}></div>
        }
    </div>
);

ActionCard.defaultProps = {
    size: 'regular',
    color: '#ffa245'
}

export default ActionCard;

