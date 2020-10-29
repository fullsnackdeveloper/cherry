import "./Popup.scss";

import React, { useState } from "react";

import { PopupProps } from "./Popup.types";
import clsx from "clsx";

const Popup: React.FC<PopupProps> = ({ title, content, children, opened, width }) => {
    const [open, updateOpen] = useState<boolean>(false);

    const handleClick = () => {
        updateOpen(true);
        opened && opened(true);
    }

    const handleBlur = () => {
        updateOpen(false);
        opened && opened(false);
    }

    return <div data-testid="Popup" className="Popup" onClick={handleClick} onBlur={handleBlur} >
        <div className={clsx("Popup-content", { open })} style={{ width }}>
            {title && <div className="Popup-content-title">{title}</div>}
            {content}
        </div>
        {children}
    </div>
};

Popup.defaultProps = {
    width: 300
}

export default Popup;

