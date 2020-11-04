import "./Popup.scss";

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

import { PopupProps } from "./Popup.types";
import ToAppLevel from "../ToAppLevel";
import _ from 'lodash';
import clsx from "clsx";
import useDimensions from '../useDimension';

const Popup: React.FC<PopupProps> = ({ position, title, content, children, opened, width, className }) => {
    const [open, updateOpen] = useState<boolean>(false);
    const popupRef = useRef();
    const dimensions = useDimensions(popupRef);
    console.log(dimensions)

    const styled = useMemo(() => {
        if (_.isEmpty(dimensions))
            return { width };
        if (position === 'r')
            return {
                width,
                top: (dimensions.top + (dimensions.height / 2)),
                right: (dimensions.right + 10),
            }
        if (position === 'lt')
            return {
                width,
                top: (dimensions?.top),
                left: (dimensions?.left + (dimensions?.width + 10)),
            }
        if (position === 'b')
            return {
                width,
                top: (dimensions?.top + (dimensions?.height + 20)),
                left: (dimensions?.left + (dimensions?.width / 2)),
            }
        return {
            width,
            top: (dimensions?.top + (dimensions?.height / 2)),
            left: (dimensions?.left + (dimensions?.width + 10)),
        }
    }, [position, dimensions])

    const handleClick = () => {
        updateOpen(true);
        opened && opened(true);
    }

    const handleBlur = () => {
        updateOpen(false);
        opened && opened(false);
    }

    return <div data-testid="Popup" className="Popup">
        <div ref={popupRef} className="Popup-trigger" onClick={handleClick} onBlur={handleBlur} >
            {children}
        </div>
        <ToAppLevel>
            <div
                className={clsx("Popup-content", position, className, { open })}
                style={styled}
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

