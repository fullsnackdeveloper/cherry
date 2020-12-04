import "./Popup.scss";

import React, { useEffect, useMemo, useRef, useState } from "react";

import { PopupProps } from "./Popup.types";
import _ from 'lodash';
import clsx from "clsx";

const Popup: React.FC<PopupProps> = ({ position, title, content, children, width, opened, className, addedPadding, fullWidth, closePopup }) => {
    const [open, updateOpen] = useState<boolean>(false);
    const [triggerPosition, updateTriggerPosition] = useState<any>(null);
    const trigger = useRef();

    useEffect(() => {
        if (closePopup && open) {
            updateOpen(false);
            document.body.style.overflow = "inherit";
            opened && opened(false)
        }
    }, [closePopup])

    const styledContent = useMemo(() => {
        if (!triggerPosition) return {};
        if (position === 'left')
            return {
                width,
                top: triggerPosition?.y + (triggerPosition?.height / 2) + window.pageXOffset,
                left: triggerPosition?.x + triggerPosition?.width + 14
            }
        if (position === 'leftTop')
            return {
                width,
                top: triggerPosition?.y + window.pageXOffset,
                left: triggerPosition?.x + triggerPosition?.width + 14
            }
        if (position === 'bottom') {
            let left = triggerPosition?.x - (width / 2) + (triggerPosition?.width / 2) - 12;
            if (addedPadding) left -= 12;
            return {
                width,
                left,
                top: triggerPosition?.y + triggerPosition?.height + 14 + window.pageXOffset
            }
        }
        if (position === 'bottomLeft')
            return {
                width,
                top: triggerPosition?.y + triggerPosition?.height + 14 + window.pageXOffset,
                left: triggerPosition?.x
            }
        if (position === 'bottomRight') {
            let left = triggerPosition?.x - (width + 24) + (triggerPosition?.width);
            if (addedPadding) left -= 24;
            return {
                width,
                left,
                top: triggerPosition?.y + triggerPosition?.height + 14 + window.pageXOffset
            }
        }
    }, [triggerPosition]);

    const styledArrow = useMemo(() => {
        if (!triggerPosition) return {};
        if (position === 'leftTop')
            return {
                top: (triggerPosition?.height / 2) - 10
            }
        if (position === 'bottomLeft')
            return {
                left: (triggerPosition?.width / 2)
            }
        if (position === 'bottomRight')
            return {
                left: "initial",
                right: (triggerPosition?.width / 2)
            }
    }, [triggerPosition]);

    const handleClick = () => {
        updateOpen(true);
        document.body.style.overflow = "hidden"
        //@ts-ignore
        updateTriggerPosition(trigger?.current?.getBoundingClientRect());
        opened && opened(true)
    }

    const handleDeselect = () => {
        updateOpen(false);
        document.body.style.overflow = "inherit"
        opened && opened(false)
    }

    return <>
        <div className={clsx("overlay", { open })} onClick={handleDeselect}></div>
        <div data-testid="Popup" className="Popup">
            <div ref={trigger} className="Popup-trigger" onClick={handleClick}>
                {children}
            </div>
        </div >
        <div className={clsx("Popup-content", position, className, { open, addedPadding, fullWidth })} style={styledContent}>
            <div className="Popup-arrow" style={styledArrow}></div>
            {title && <div className="Popup-content-title">{title}</div>}
            {content}
        </div>
    </>
};

Popup.defaultProps = {
    width: 300,
    position: 'bottomRight'
}

export default Popup;

