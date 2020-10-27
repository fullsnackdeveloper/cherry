import "./Col.scss";

import React, { FC, useEffect, useState } from "react";

import { ColProps } from "./Col.types";
import _ from 'lodash';
import { useResize } from "../useResize";

const Col: FC<ColProps> = ({ span, children }: ColProps) => {
    const [colRef, updateColumnsRef] = useState(span);
    const { size, sizeIndex } = useResize();

    useEffect(() => {
        if (_.isNumber(span))
            return;
        (span[sizeIndex] ?? false) ?
            updateColumnsRef(_.last(span)) :
            updateColumnsRef(span[sizeIndex]);
    }, [size, sizeIndex]);

    return <div className="Col" style={{ gridColumn: `span ${colRef}`, display: colRef !== 0 ? 'block' : 'none' }}>
        {children}
    </div>
};

Col.defaultProps = {
    span: 1
}

export default Col;

