import "./SideBySide.scss";

import React from "react";
import { SideBySideProps } from "./SideBySide.types";

const SideBySide: React.FC<SideBySideProps> = ({ top, left, right, ratio }) => {

    let percentages = ratio.split("-");
    console.log(percentages[0], percentages[1])

    return <div data-testid="SideBySide" className="SideBySide">
        <div className="SideBySide-top">
            {top}
        </div>
        <div className="SideBySide-lowerContainer">
            <div className="SideBySide-left" style={{ flexBasis: `${percentages[0]}%` }}>
                {left}
            </div>
            <div className="SideBySide-right" style={{ flexBasis: `${percentages[1]}%` }}>
                {right}
            </div>
        </div>
    </div>
};

SideBySide.defaultProps = {
    ratio: "50-50"
}

export default SideBySide;

