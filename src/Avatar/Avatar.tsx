// import "./Avatar.scss";

import React, { useCallback, useEffect, useRef } from "react";

import { AvatarProps } from "./Avatar.types";
import clsx from "clsx";

const Avatar: React.FC<AvatarProps> = ({ size, image, initials, noHover }) => {
    const avatar = useRef(null);

    const handleClick = useCallback(() => {
        avatar.current.focus();
    }, [avatar])

    return <div data-testid="Avatar" ref={avatar} className={clsx("Avatar", size, { noProfile: !image, noHover })} style={{ backgroundImage: `url(${image})` }} tabIndex={-1} onClick={handleClick}>
        <span>{!image && initials}</span>
    </div>
};

Avatar.defaultProps = {
    initials: 'N/A',
    size: 'regular'
}

export default Avatar;

