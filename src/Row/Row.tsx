import "./Row.scss";

import React, { FC, useCallback, useEffect, useState } from "react";

import { RowProps } from "./Row.types";
import _ from 'lodash';
import clsx from "clsx";
import { useResize } from "../useResize";

const Row: FC<RowProps> = ({ gutter, columns, children, title, subTitle }: RowProps) => {
    const [columnsRef, updateColumnsRef] = useState(columns);
    const { size, sizeIndex } = useResize();

    useEffect(() => {
        if (_.isNumber(columns))
            return;
        !columns[sizeIndex] ?
            updateColumnsRef(_.last(columns)) :
            updateColumnsRef(columns[sizeIndex]);
    }, [size, sizeIndex]);

    const renderStyles = useCallback(() => {
        return {
            display: 'grid',
            gridTemplateColumns: `repeat(${columnsRef}, minmax(0, 1fr))`,
            gridGap: gutter,
        }
    }, [columnsRef])

    return <div className={clsx("Row")}>
        {title &&
            <div className="Row-heading">
                <h4>{title}</h4>
                <h5>{subTitle}</h5>
            </div>
        }
        <div className="Row-container" style={renderStyles()}>
            {children}
        </div>
    </div>
};

Row.defaultProps = {
    columns: 12,
    gutter: 24
}

export default Row;