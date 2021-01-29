// import "./SideBySide.scss";

import React from "react";
import { SideBySideProps } from "./SideBySide.types";
import clsx from "clsx";

const SideBySide: React.FC<SideBySideProps> = ({ top, left, right, ratio, backgroundColor }) => {

    let percentages = ratio.split("-");

    return <div data-testid="SideBySide" className={clsx("SideBySide", { hasBackground: backgroundColor })} style={{ backgroundColor }}>
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

