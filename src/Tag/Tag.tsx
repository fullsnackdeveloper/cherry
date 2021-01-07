// import "./Tag.scss";

import React, { useEffect, useState } from "react";

import { TagProps } from "./Tag.types";
import clsx from "clsx";

const Tag: React.FC<TagProps> = ({ children, activate, onClick }) => {
    const [active, updateActive] = useState(activate);

    useEffect(() => {
        updateActive(activate)
    }, [activate])

    return <div data-testid="Tag" className={clsx("Tag", { active })} onClick={onClick}>{children}</div>
};

export default Tag;

