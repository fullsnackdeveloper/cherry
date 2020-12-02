import "./Image.scss";

import React, { useState } from "react";

import Icon from "../Icon/Icon";
import { ImageProps } from "./Image.types";
import Link from "../Link/Link";
import clsx from "clsx";

const Image: React.FC<ImageProps> = ({ image, hotspots }) => {

    const [hotspotOpen, openHotspot] = useState(null);

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
                    <a href={h.url}><span>{h.title}</span><span>shop<Icon icon="chevron-right" size={8} /></span></a>
                </div>
            </div>
        })
    }

    return <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div data-testid="Image" className="Image">
            <div className="Image-container">
                <div className="Image-Hotspots">
                    {hotspots && renderHotspots()}
                </div>
                <picture>
                    <img src={image.src} alt={image.alt} loading="lazy" />
                </picture>
            </div>
            <div className="Image-source">
                {image.source?.author?.name && image.source?.author?.link &&
                    <div className="Image-source-author">
                        <a href={image.source?.author.link} target="_blank">{image.source?.author.name}</a>
                    </div>
                }
                {image.source?.site && image.source?.author &&
                    <span>|</span>
                }
                {image.source?.site?.name && image.source?.site?.link &&
                    <div className="Image-source-site">
                        <a href={image.source?.site.link} target="_blank">{image.source?.site.name}</a>
                    </div>
                }
            </div>
        </div>
    </div>
};

export default Image;

