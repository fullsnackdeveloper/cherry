// import "./PageContainer.scss";

import React, { useEffect, useState } from "react";
import { childrenWithProps, responsiveState } from "../utils";

import { PageContainerProps } from "./PageContainer.types";
import clsx from "clsx";
import { useResize } from "../useResize";

const PageContainer: React.FC<PageContainerProps> = ({ collapsedAt, hasActionBar, hasSteps, children, shadedBackground, overflowHidden, fullwidth }) => {
    const { sizeIndex } = useResize();
    const [navState, updateNavState] = useState(null);

    useEffect(() => {
        let collapsed = responsiveState(sizeIndex, collapsedAt);
        updateNavState(collapsed);
    }, [sizeIndex, collapsedAt]);

    return <div data-testid="PageContainer" className={clsx("PageContainer", { hasActionBar, hasSteps, shadedBackground, overflowHidden, fullwidth })}>
        <div style={{ margin: '0 auto', maxWidth: fullwidth ? null : 1488 }}>
            {children}
        </div>
    </div>
};

export default PageContainer;

