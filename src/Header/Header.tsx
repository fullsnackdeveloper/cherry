import "./Header.scss";

import React, { FC, Fragment, useEffect, useState } from "react";

import { HeaderProps } from "./Header.types";
import Icon from "../Icon/Icon";
import Link from "../Link/Link";
import Stats from "../Stats/Stats";
import clsx from "clsx";
import { responsiveState } from "../utils";
import { useResize } from "../useResize";

const Header: FC<HeaderProps> = ({ title, subTitle, description, image, categories, stats }: HeaderProps) => {
    const { sizeIndex } = useResize();
    const [size, updateSize] = useState(null);
    useEffect(() => {
        updateSize(sizeIndex);
    }, [sizeIndex])

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

    return <Fragment>
        <div className={clsx("Header")}>
            <div className="Header-backgroundImage">
                <img src={image.src} alt={image.alt} />
                <div className="Header-backgroundImage-overlay" />
            </div>
            <div className={clsx("Header-content")}>
                {categories &&
                    <div className="Header-categories">
                        {renderCategories()}
                    </div>
                }
                <h1>{title}</h1>
                <p className={clsx({ subTitle, description })}>{subTitle || description}</p>
                {stats && (size > 1) &&
                    < Stats stats={stats} />
                }
            </div>
        </div>
        {stats && (size <= 1) &&
            < Stats stats={stats} />
        }
    </Fragment>
};


export default Header;

