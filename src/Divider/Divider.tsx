// import "./Divider.scss";

import { DividerProps } from "./Divider.types";
import React from "react";
import clsx from "clsx";

const Divider: React.FC<DividerProps> = ({ children }) => (
    <div data-testid="Divider" className={clsx("Divider", { hasChildren: children })}>{children && <span>{children}</span>}</div>
);

export default Divider;

