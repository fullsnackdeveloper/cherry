// import "./Block.scss";

import { BlockProps } from "./Block.types";
import React from "react";
import clsx from "clsx";

const Block: React.FC<BlockProps> = ({ html, children, isHeading, pullDown, pullUp }) => (
    <div data-testid="Block" className={clsx("Block", { isHeading, pullDown, pullUp })} dangerouslySetInnerHTML={html && { __html: html }}>{children}</div>
);

export default Block;

