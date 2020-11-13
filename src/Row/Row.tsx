import "./Row.scss";

import React, { FC, useCallback, useEffect, useState } from "react";

import { RowProps } from "./Row.types";
import _ from 'lodash';
import clsx from "clsx";
import { useResize } from "../useResize";

const Row: FC<RowProps> = ({ gutter, columns, children, title, subTitle, backgroundColor }: RowProps) => {
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

    return <section className={clsx("Row", { hasBackground: backgroundColor, hasTitle: title || subTitle })}>
        {backgroundColor &&
            <div className="Row-background" style={{ backgroundColor }} />
        }
        {title &&
            <div className="Row-heading">
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
            </div>
        }
        <div className="Row-container" style={renderStyles()}>
            {children}
        </div>
    </section>
};

Row.defaultProps = {
    columns: 12,
    gutter: 24
}

export default Row;