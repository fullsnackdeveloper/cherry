import "./Tag.scss";

import React, { useState } from "react";

import { TagProps } from "./Tag.types";
import clsx from "clsx";

const Tag: React.FC<TagProps> = ({ children }) => {
    const [active, updateActive] = useState(false);

    const handleClick = () => {
        updateActive(!active);
    }

    return <div data-testid="Tag" className={clsx("Tag", { active })} onClick={handleClick}>{children}</div>
};

export default Tag;

