import "./Link.scss";

import Icon from "../Icon/Icon";
import { LinkProps } from "./Link.types";
import React from "react";
import clsx from "clsx";

const Link: React.FC<LinkProps> = ({ children, icon, iconSize, darkMode, link }) => (
    <button data-testid="Link" className={clsx("Link", { darkMode, withIcon: icon })}>
        {icon &&
            <Icon size={iconSize} icon={icon}></Icon>
        }
        <span>{children}</span>
    </button>
);

Link.defaultProps = {
    iconSize: 24,
    darkMode: false
}

export default Link;

