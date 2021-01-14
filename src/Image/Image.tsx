// import "./Image.scss";

import React, { useEffect, useState } from "react";

import Icon from "../Icon/Icon";
import { ImageProps } from "./Image.types";
import _ from 'lodash';
import clsx from "clsx";
import { useInView } from 'react-intersection-observer';

const Image: React.FC<ImageProps> = ({ children, image, hotspots }) => {

    const [hotspotOpen, openHotspot] = useState(null);
    const { ref, inView } = useInView({
        delay: 500
    });
    const [hideHotspotTimeout, setHideHotspotTimeout] = useState(null);

    useEffect(() => {
        if (hotspots?.length > 0) {
            if (inView) {
                openHotspot(0);
                setHideHotspotTimeout(setTimeout(() => {
                    // openHotspot(null);
                }, 6000));
            } else if (!inView) {
                clearTimeout(hideHotspotTimeout);
                openHotspot(null);
            }
        }
    }, [inView, hotspots]);

    const handleHotspotHover = (index: number) => () => {
        openHotspot(index);
    }

    const handleHotspotLeave = () => {
        openHotspot(null);
    }

    const renderHotspots = () => {
        return hotspots.map((h, i) => {
            return <div key={i} className={clsx("Hotspot", { open: i === hotspotOpen })} style={{ top: `${h.y}%`, left: `${h.x}%` }} onFocus={handleHotspotHover(i)} onBlur={handleHotspotLeave} onMouseEnter={handleHotspotHover(i)} onMouseLeave={handleHotspotLeave}>
                <div className="Hotspot-spot" >
                    <Icon icon="spot" size={24} />
                </div>
                <div className={clsx("Hotspot-hot", { top: h.y > 50 })} style={{ transform: `translateX(-${h.x}%)` }}>
                    <a target="_blank" href={h.link}>
                        <span className="spot-title">{_.truncate(h.title, { 'length': 32, })}</span><span className="spot-shop">shop<Icon icon="chevron-right" size={8} /></span>
                    </a>
                </div>
            </div>
        })
    }

    return <div ref={ref} style={{ display: 'flex', width: '100%' }}>
        <div data-testid="Image" className="Image">
            <div className="Image-container">
                <div className="Image-Hotspots">
                    {hotspots && renderHotspots()}
                </div>
                <picture>
                    {children}
                </picture>
            </div>
            <div className="Image-source">
                {image.source?.author?.name && image.source?.author?.link &&
                    <div className="Image-source-author">
                        <a href={image.source?.author.link} target="_blank">{image.source?.author.name}</a>
                    </div>
                }
                {!(image.source.site.name === image.source.author.name) &&
                    <>
                        {image.source?.site && image.source?.author &&
                            <span>|</span>
                        }
                        {image.source?.site?.name && image.source?.site?.link &&
                            <div className="Image-source-site">
                                <a href={image.source?.site.link} target="_blank">{image.source?.site.name}</a>
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    </div>
};

export default Image;

