import "./Recommendation.scss";

import Icon from "../Icon/Icon";
import Link from "../Link/Link";
import React from "react";
import { RecommendationProps } from "./Recommendation.types";

const Recommendation: React.FC<RecommendationProps> = ({ type, title, description, image, uri }) => {
    return <div data-testid="Recommendation" className="Recommendation">
        <div className="Recommendation-text">
            <h2>{title}</h2>
            <p>{description}</p>
            <Link>Read more<Icon icon="chevron-right" size={10} /></Link>
        </div>
        <div className="Recommendation-image" style={{ backgroundImage: `url(${image.src})` }}>
            {type === 'lesson' &&
                <div className="Recommendation-image-icon">
                    <Icon icon="learn" />
                </div>
            }
        </div>
    </div>
};

export default Recommendation;

