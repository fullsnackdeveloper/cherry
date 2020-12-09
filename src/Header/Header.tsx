import "./Header.scss";

import React, { FC, Fragment, useEffect, useState } from "react";

import { HeaderProps } from "./Header.types";
import Icon from "../Icon/Icon";
import Link from "../Link/Link";
import Stats from "../Stats/Stats";
import clsx from "clsx";
import { useResize } from "../useResize";

const Header: FC<HeaderProps> = ({ title, subTitle, description, image, categories, stats, squiggle, maxWidth, type }: HeaderProps) => {
    const { sizeIndex } = useResize();
    const [size, updateSize] = useState(null);
    useEffect(() => {
        updateSize(sizeIndex);
    }, [sizeIndex])

    const renderCategories = () => {
        return categories.map((c, index) => {
            return <>
                <Link key={index} darkMode>{c.title}</Link>
                { categories.length - 1 > index &&
                    <Icon key={2} icon="chevron-right" size={10} />
                }
            </>
        })
    }

    return <Fragment>
        <div className={clsx("Header", type)}>
            <div className="Header-backgroundImage">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="Header-backgroundImage-overlay" />
            </div>
            <div className={clsx("Header-content")} style={{ maxWidth }}>
                {categories &&
                    <div className="Header-categories">
                        {renderCategories()}
                    </div>
                }
                <h1>{title}</h1>
                {squiggle && <img className="Header-squiggle" src="/squiggle.svg" alt="squiggle" />}
                <p className={clsx({ subTitle, description })}>{subTitle || description}</p>
                {stats && (size > 1) &&
                    < Stats stats={stats} />
                }
            </div>
            <div className="Header-source">
                {image.source?.author?.name && image.source?.author?.link &&
                    <div className="Header-source-author">
                        <a href={image.source?.author.link} target="_blank">{image.source?.author.name}</a>
                    </div>
                }
                {image.source?.site && image.source?.author &&
                    <span>|</span>
                }
                {image.source?.site?.name && image.source?.site?.link &&
                    <div className="Header-source-site">
                        <a href={image.source?.site.link} target="_blank">{image.source?.site.name}</a>
                    </div>
                }
            </div>
        </div>
        {stats && (size <= 1) &&
            <Stats stats={stats} />
        }
    </Fragment>
};

Header.defaultProps = {
    type: 'content'
}

export default Header;

