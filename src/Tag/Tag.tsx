import "./Tag.scss";

import React, { useEffect, useState } from "react";

import { TagProps } from "./Tag.types";
import clsx from "clsx";

const Tag: React.FC<TagProps> = ({ children, activate }) => {
    const [active, updateActive] = useState(activate);

    useEffect(() => {
        updateActive(activate)
    }, [activate])

    const handleClick = () => {
        if (!activate)
            updateActive(!active);
    }

    return <div data-testid="Tag" className={clsx("Tag", { active })} onClick={handleClick}>{children}</div>
};

export default Tag;

