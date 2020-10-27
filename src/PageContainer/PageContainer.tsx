import "./PageContainer.scss";

import React, { useEffect, useState } from "react";
import { childrenWithProps, responsiveState } from "../utils";

import { PageContainerProps } from "./PageContainer.types";
import clsx from "clsx";
import { useResize } from "../useResize";

const PageContainer: React.FC<PageContainerProps> = ({ collapsedAt, children }) => {
    const { sizeIndex } = useResize();
    const [navState, updateNavState] = useState(null);

    useEffect(() => {
        let collapsed = responsiveState(sizeIndex, collapsedAt);
        updateNavState(collapsed);
    }, [sizeIndex, collapsedAt]);

    return <div data-testid="PageContainer" className={clsx("PageContainer", navState && navState)}>{childrenWithProps(children, { collapsedAt })}</div>
};

export default PageContainer;
