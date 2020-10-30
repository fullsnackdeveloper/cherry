import "./Popup.scss";

import React, { useCallback, useRef, useState } from "react";

import { PopupProps } from "./Popup.types";
import ToAppLevel from "../ToAppLevel";
import clsx from "clsx";
import { useResize } from '../useResize';

const Popup: React.FC<PopupProps> = ({ position, title, content, children, opened, width, className }) => {
    const [open, updateOpen] = useState<boolean>(false);
    const popupTrigger = useRef();
    const { refDimensions } = useResize(popupTrigger);
    const styled = useCallback(() => {
        if (position === 'r')
            return {
                width,
                top: (refDimensions?.top + (refDimensions?.height / 2)),
                right: (refDimensions?.right + 10),
            }
        if (position === 'lt')
            return {
                width,
                top: (refDimensions?.top),
                left: (refDimensions?.left + (refDimensions?.width + 10)),
            }
        if (position === 'b')
            return {
                width,
                top: (refDimensions?.top + (refDimensions?.height + 20)),
                left: (refDimensions?.left + (refDimensions?.width / 2)),
            }
        return {
            width,
            top: (refDimensions?.top + (refDimensions?.height / 2)),
            left: (refDimensions?.left + (refDimensions?.width + 10)),
        }
    }, [position, refDimensions])

    const handleClick = () => {
        updateOpen(true);
        opened && opened(true);
    }

    const handleBlur = () => {
        updateOpen(false);
        opened && opened(false);
    }

    return <div data-testid="Popup" className="Popup">
        <div ref={popupTrigger} className="Popup-trigger" onClick={handleClick} onBlur={handleBlur} >
            {children}
        </div>
        <ToAppLevel>
            <div
                className={clsx("Popup-content", position, className, { open })}
                style={styled()}
            >
                {title && <div className="Popup-content-title">{title}</div>}
                {content}
            </div>
        </ToAppLevel>
    </div>
};

Popup.defaultProps = {
    width: 300,
    position: 'b'
}

export default Popup;

