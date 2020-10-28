import "./Block.scss";

import { BlockProps } from "./Block.types";
import React from "react";

const Block: React.FC<BlockProps> = ({ html, children }) => (
    <div data-testid="Block" className="Block" dangerouslySetInnerHTML={html && { __html: html }}>{children}</div>
);

export default Block;

