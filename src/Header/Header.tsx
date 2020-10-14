import "./Header.scss";

import React, { FC } from "react";

import { HeaderProps } from "./Header.types";
import clsx from "clsx";

const Header: FC<HeaderProps> = ({ title, description, image }: HeaderProps) => (
    <div className={clsx("Header")}>
        <div className={clsx("Header-content")}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <div className="Header-image" style={{ backgroundImage: `url(${image})` }}></div>
    </div>
);


export default Header;

