import "./Avatar.scss";

import { AvatarProps } from "./Avatar.types";
import React from "react";
import clsx from "clsx";

const Avatar: React.FC<AvatarProps> = ({ size, image, initials, status }) => (
    <div data-testid="Avatar" className={clsx("Avatar", size, `status-${status ? status : 0}`, { noProfile: !image })} style={{ backgroundImage: `url(${image})` }}>{!image && initials}</div>
);

Avatar.defaultProps = {
    initials: 'N/A',
    size: 'regular',
    status: 0
}

export default Avatar;

