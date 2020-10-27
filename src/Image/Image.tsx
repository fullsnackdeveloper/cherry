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

    return <div data-testid="Image" className="Image">
        <div className="Image-Hotspots">
            {hotspots && renderHotspots()}
        </div>
        <picture>
            <img src={image.url} alt={image.alt} loading="lazy" />
        </picture>
        <caption>{image.source}</caption>
    </div>
};

export default Image;

