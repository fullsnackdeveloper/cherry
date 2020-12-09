import "./ToolTip.scss";

import React, { useState } from "react";

import { ToolTipProps } from "./ToolTip.types";
import clsx from "clsx";

const ToolTip: React.FC<ToolTipProps> = ({ disabled, message, children, position }) => {
    const [focused, updateFocused] = useState(false);

    const handleState = bool => () => {
        updateFocused(bool);
    }

    return <div data-testid="ToolTip" tabIndex={-1} className={clsx("ToolTip", position, { focused, disabled })} onClick={handleState(true)} onBlur={handleState(false)}>
        <div className="ToolTip-popup">
            <p>{message}</p>
        </div>
        {children}
    </div>
};

ToolTip.defaultProps = {
    position: "right"
}

export default ToolTip;

