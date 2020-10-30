import "./Drawer.scss";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { DrawerProps } from "./Drawer.types";
import clsx from "clsx";
import { useResize } from "../useResize";

const Drawer: React.FC<DrawerProps> = ({ position, open, updateOpen, children }) => {
    const drawerRef = useRef();
    const [opened, updateOpened] = useState(open);
    const { refDimensions } = useResize(drawerRef);

    useEffect(() => {
        updateOpened(open)
    }, [open])

    const handleOffClick = () => {
        updateOpened(false)
        updateOpen && updateOpen(false);
    }
    const renderStyles = useCallback(() => {
        let styled = {};
        switch (position) {
            case 'top':
                styled = { top: opened ? 0 : -(refDimensions?.height) };
                break;
            case 'bottom':
                styled = { bottom: opened ? 0 : -(refDimensions?.height) };
                break;
            case 'left':
                styled = { left: opened ? 0 : -(refDimensions?.width) };
                break;
            case 'right':
                styled = { right: opened ? 0 : -(refDimensions?.width) };
                break;
            default:
                break;
        }
        return styled;
    }, [refDimensions, opened])

    return <><div
        data-testid="Drawer"
        ref={drawerRef}
        className={clsx("Drawer", position, { open: opened })}
        style={renderStyles()}
    >
        {children}
    </div>
        <div className={clsx("overlay", { open: opened })} onClick={handleOffClick}></div>
    </>
};

Drawer.defaultProps = {
    position: 'bottom',
    open: false
}

export default Drawer;

