import "./Col.scss";

import React, { FC } from "react";

import { ColProps } from "./Col.types";

const Col: FC<ColProps> = ({ span, children }: ColProps) => {
    const colStyles = {
        gridColumn: `span ${span}`
    }
    return <div className="Col" style={colStyles}>
        {children}
    </div>
};

Col.defaultProps = {
    span: 1
}

export default Col;

