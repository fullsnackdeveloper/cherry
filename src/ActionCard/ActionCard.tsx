import "./ActionCard.scss";

import React, { FC } from "react";

import { ActionCardProps } from "./ActionCard.types";
import Icon from "../Icon/Icon";
import Link from "../Link/Link";
import clsx from "clsx";

const ActionCard: FC<ActionCardProps> = ({ title, icon, onClick, linkText, image, size, color }: ActionCardProps) => (
    <div className={clsx("ActionCard", size, { withIcon: icon })} style={{ background: color }} onClick={onClick}>
        <div className="ActionCard-content">
            {icon &&
                <Icon icon={icon} size={32} />
            }
            <h3>{title}</h3>
            <a href="#">{linkText}<Icon icon="chevron-right" size={11} /></a>
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

