import "./Link.scss";

import Icon from "../Icon/Icon";
import { LinkProps } from "./Link.types";
import React from "react";
import clsx from "clsx";

const Link: React.FC<LinkProps> = ({ children, icon, iconSize, darkMode, link }) => (
    <a data-testid="Link" className={clsx("Link", { darkMode, withIcon: icon })} href={link}>
        {icon &&
            <Icon size={iconSize} icon={icon}></Icon>
        }
        <span>{children}</span>
    </a>
);

Link.defaultProps = {
    iconSize: 24,
    darkMode: false
}

export default Link;

