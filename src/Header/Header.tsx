import "./Header.scss";

import React, { FC } from "react";

import { HeaderProps } from "./Header.types";
import clsx from "clsx";

const Header: FC<HeaderProps> = ({ title, description, image }: HeaderProps) => (
    <div className={clsx("Header")} style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%), url(${image})` }}>
        <div className={clsx("Header-content")}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
);


export default Header;

