import "./Row.scss";

import React, { FC, useCallback, useEffect, useState } from "react";

import Link from "../Link/Link";
import { RowProps } from "./Row.types";
import _ from 'lodash';
import clsx from "clsx";
import { useResize } from "../useResize";

const Row: FC<RowProps> = ({ gutter, columns, children, title, subTitle, backgroundColor, lastRow, titleStyle, link, linkText }: RowProps) => {
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
    }, [columnsRef, sizeIndex])

    return <section className={clsx("Row", { lastRow, hasBackground: backgroundColor, hasTitle: title || subTitle, hide: columns[sizeIndex] === 0 })}>
        {backgroundColor &&
            <div className="Row-background" style={{ backgroundColor }} />
        }
        {title &&
            <div className={clsx("Row-heading", titleStyle)} >
                <h2>{title}</h2>
                {subTitle && (titleStyle !== 'fullwidth') && <h3>{subTitle}</h3>}
                {link && <Link link={link}>{linkText}</Link>}
            </div>
        }
        <div className="Row-container" style={renderStyles()}>
            {children}
        </div>
    </section >
};

Row.defaultProps = {
    columns: 12,
    gutter: 24,
    titleStyle: "center"
}

export default Row;