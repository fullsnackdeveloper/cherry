// import "./Link.scss";

import Icon from "../Icon/Icon";
import { LinkProps } from "./Link.types";
import React from "react";
import clsx from "clsx";

const Link: React.FC<LinkProps> = ({ active, children, icon, iconSize, darkMode, onClick, compact }) => (
    <button data-testid="Link" className={clsx("Link", { active, darkMode, withIcon: icon, onlyIcon: !children, hideText: compact && icon })} onClick={onClick}>
        {icon &&
            <Icon size={iconSize} icon={icon}></Icon>
        }
        {children &&
            <span>{children}</span>
        }
    </button>
);

Link.defaultProps = {
    iconSize: 24,
    darkMode: false
}

export default Link;

