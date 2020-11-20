import "./Widget.scss";

import Link from "../Link/Link";
import React from "react";
import { WidgetProps } from "./Widget.types";

const Widget: React.FC<WidgetProps> = ({ title, subTitle, link, linkText, color, children }) => (
    <div data-testid="Widget" className="Widget">
        <div className="Widget-head" style={{ background: color }}>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
        </div>
        <div className="Widget-body">
            {children}
        </div>
        <div className="Widget-footer">
            <Link>{linkText}</Link>
        </div>
    </div>
);

export default Widget;

