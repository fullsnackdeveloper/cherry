import "./Popup.scss";

import React, { useEffect, useMemo, useRef, useState } from "react";

import { PopupProps } from "./Popup.types";
import _ from 'lodash';
import clsx from "clsx";
import { useResize } from "../useResize";

const Popup: React.FC<PopupProps> = ({ position, title, content, children, width, opened, className, addedPadding, fullWidth, closePopup, noOverlay }) => {
    const [open, updateOpen] = useState<boolean>(false);
    const [triggerPosition, updateTriggerPosition] = useState<any>(null);
    const trigger = useRef();
    const popupRef = useRef();
    const { size } = useResize();

    useEffect(() => {
        if (closePopup && open) {
            updateOpen(false);
            opened && opened(false)
        }
    }, [closePopup]);

    useEffect(() => {
        window.addEventListener('click', handleAllClicks);
        return () => window.removeEventListener('click', handleAllClicks);
    }, []);

    const handleAllClicks = e => {
        //@ts-ignore
        if (!(popupRef?.current.contains(e.target)) && !(trigger?.current.contains(e.target))) {
            updateOpen(false);
            opened && opened(false)
        }
    }

    const styledContent = useMemo(() => {
        if (!triggerPosition) return {};
        if (position === 'left')
            return {
                width,
                top: triggerPosition.height / 2,
                left: triggerPosition.width + 14
            }
        if (position === 'leftTop')
            return {
                width,
                top: 0,
                left: triggerPosition.width + 14
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
        if (position === 'bottomLeft') {
            let left = triggerPosition.width / 2;
            if (addedPadding) left += 48;
            return {
                width,
                top: triggerPosition.height + 14,
                left
            }
        }
        if (position === 'bottomRight') {
            let right = triggerPosition.width / 2;
            if (addedPadding) right += 48;
            return {
                width,
                top: triggerPosition.height + 14,
                left: 'initial',
                right
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
        //@ts-ignore
        updateTriggerPosition(trigger?.current?.getBoundingClientRect());
        opened && opened(true)
    }

    const handleDeselect = () => {
        updateOpen(false);
        opened && opened(false)
    }

    return <>
        { !noOverlay && <div className={clsx("overlay", { open })} onClick={handleDeselect}></div>}
        <div data-testid="Popup" className="Popup">
            <div ref={trigger} className="Popup-trigger" onClick={handleClick}>
                {children}
            </div>
            {(size !== 'md') && (size !== 'sm') &&
                <div ref={popupRef} className={clsx("Popup-content", position, className, { open, addedPadding, fullWidth })} style={styledContent}>
                    <div className="Popup-arrow" style={styledArrow}></div>
                    {title && <div className="Popup-content-title">{title}</div>}
                    {content}
                </div>
            }
        </div>
        {((size === 'md') || (size === 'sm')) &&
            <div ref={popupRef} className={clsx("Popup-content", position, className, { open, addedPadding, fullWidth })} style={styledContent}>
                <div className="Popup-arrow" style={styledArrow}></div>
                {title && <div className="Popup-content-title">{title}</div>}
                {content}
            </div>
        }
    </>
};

Popup.defaultProps = {
    width: 300,
    position: 'bottomRight',
    noOverlay: false
}

export default Popup;

