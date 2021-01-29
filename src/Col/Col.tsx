// import "./Col.scss";

import React, { FC, useEffect, useState } from "react";

import { ColProps } from "./Col.types";
import _ from 'lodash';
import clsx from "clsx";
import { useResize } from "../useResize";

const Col: FC<ColProps> = ({ span, children, style, ...props }: ColProps) => {
    const [colRef, updateColumnsRef] = useState(span);
    const { size, sizeIndex } = useResize();

    useEffect(() => {
        if (_.isNumber(span))
            return;
        span.hasOwnProperty(sizeIndex) ? updateColumnsRef(span[sizeIndex]) : updateColumnsRef(_.last(span))
    }, [size, sizeIndex]);

    return <div className={clsx("Col", { noShow: colRef === 0 })} style={{ gridColumn: `span ${colRef}`, ...style }} {...props}>
        {children}
    </div>
};

Col.defaultProps = {
    span: 1
}

export default Col;

