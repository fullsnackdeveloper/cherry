// import "./Widget.scss";

import Link from "../Link/Link";
import React from "react";
import { WidgetProps } from "./Widget.types";
import clsx from "clsx";

const Widget: React.FC<WidgetProps> = ({ title, subTitle, onClick, linkText, color, children, fullHeight }) => (
    <div data-testid="Widget" className={clsx("Widget", { fullHeight })}>
        <div className="Widget-head" style={{ background: color }}>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
        </div>
        <div className="Widget-body">
            {children}
        </div>
        <div className="Widget-footer">
            <Link onClick={onClick}>{linkText}</Link>
        </div>
    </div >
);

export default Widget;

