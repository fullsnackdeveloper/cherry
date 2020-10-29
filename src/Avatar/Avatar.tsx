import "./Avatar.scss";

import React, { useCallback, useEffect, useRef } from "react";

import { AvatarProps } from "./Avatar.types";
import clsx from "clsx";

const Avatar: React.FC<AvatarProps> = ({ size, image, initials }) => {
    const avatar = useRef(null);

    const handleClick = useCallback(() => {
        avatar.current.focus();
    }, [avatar])

    return <div data-testid="Avatar" ref={avatar} className={clsx("Avatar", size, { noProfile: !image })} style={{ backgroundImage: `url(${image})` }} tabIndex={-1} onClick={handleClick}>{!image && initials}</div>
};

Avatar.defaultProps = {
    initials: 'N/A',
    size: 'regular'
}

export default Avatar;

