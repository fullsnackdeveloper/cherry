import "./ToolTip.scss";

import React from "react";
import { ToolTipProps } from "./ToolTip.types";

const ToolTip: React.FC<ToolTipProps> = ({ message, children }) => (
    <div data-testid="ToolTip" className="ToolTip">
        <div className="ToolTip-popup">
            <p>{message}</p>
        </div>
        {children}
    </div>
);

export default ToolTip;

