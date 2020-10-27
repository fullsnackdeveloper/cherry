import "./Header.scss";

import React, { FC } from "react";

import { HeaderProps } from "./Header.types";
import Icon from "../Icon/Icon";
import Link from "../Link/Link";
import clsx from "clsx";

const Header: FC<HeaderProps> = ({ title, subTitle, description, image, categories }: HeaderProps) => {

    const renderCategories = () => {
        return categories.map((c, index) => {
            return <>
                <Link key={1} darkMode>{c.name}</Link>
                { categories.length - 1 > index &&
                    <Icon key={2} icon="chevron-right" size={10} />
                }
            </>
        })
    }

    return <div className={clsx("Header")} style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%), url(${image})` }}>
        <div className={clsx("Header-content")}>
            {categories &&
                <div className="Header-categories">
                    {renderCategories()}
                </div>
            }
            <h1>{title}</h1>
            <p className={clsx({ subTitle, description })}>{subTitle || description}</p>
        </div>
    </div>
};


export default Header;

