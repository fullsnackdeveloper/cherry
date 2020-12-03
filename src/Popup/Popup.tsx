import "./Popup.scss";

import React, { useMemo, useRef, useState } from "react";

import { PopupProps } from "./Popup.types";
import _ from 'lodash';
import clsx from "clsx";

const Popup: React.FC<PopupProps> = ({ position, title, content, children, opened, width, className, addedPadding }) => {
    const [open, updateOpen] = useState<boolean>(false);
    const [triggerPosition, updateTriggerPosition] = useState<any>(null);
    const trigger = useRef();

    const styledContent = useMemo(() => {
        if (!triggerPosition) return {};
        if (position === 'left')
            return {
                width,
                top: triggerPosition?.y + (triggerPosition?.height / 2),
                left: triggerPosition?.x + triggerPosition?.width + 14
            }
        if (position === 'leftTop')
            return {
                width,
                top: triggerPosition?.y,
                left: triggerPosition?.x + triggerPosition?.width + 14
            }
        if (position === 'bottom')
            return {
                width,
                top: triggerPosition?.y + triggerPosition?.height + 14,
                left: triggerPosition?.x - (width / 2) + (triggerPosition?.width / 2)
            }
    }, [triggerPosition]);

    const styledArrow = useMemo(() => {
        if (!triggerPosition) return {};
        if (position === 'leftTop')
            return {
                width,
                top: (triggerPosition?.height / 2) - 10
            }
    }, [triggerPosition]);

    const handleClick = () => {
        updateOpen(true);
        //@ts-ignore
        updateTriggerPosition(trigger?.current?.getBoundingClientRect());
        opened && opened(true);
    }

    const handleBlur = () => {
        updateOpen(false);
        opened && opened(false);
    }

    return <>
        <div data-testid="Popup" className="Popup">
            <div ref={trigger} className="Popup-trigger" onClick={handleClick} onBlur={handleBlur} >
                {children}
            </div>
        </div >
        <div className={clsx("Popup-content", position, className, { open, addedPadding })} style={styledContent}>
            <div className="Popup-arrow" style={styledArrow}></div>
            {title && <div className="Popup-content-title">{title}</div>}
            {content}
        </div>
    </>
};

Popup.defaultProps = {
    width: 300,
    position: 'bottom'
}

export default Popup;

