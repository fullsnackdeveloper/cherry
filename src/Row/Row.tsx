import "./Row.scss";

import React, { FC } from "react";

import { RowProps } from "./Row.types";

const Row: FC<RowProps> = ({ gutter, columns, children, title, subTitle }: RowProps) => {
    const rowStyles = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: gutter,
    }

    return <div className="Row">
        {title &&
            <div className="Row-heading">
                <h4>{title}</h4>
                <h5>{subTitle}</h5>
            </div>
        }
        <div className="Row-container" style={rowStyles}>
            {children}
        </div>
    </div>
};

Row.defaultProps = {
    columns: 12,
    gutter: 24
}

export default Row;