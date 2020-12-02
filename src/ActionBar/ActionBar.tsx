import "./ActionBar.scss";

import React, { useEffect, useState } from "react";

import { ActionBarProps } from "./ActionBar.types";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import ConditionalWrapper from "../ConditionalWrapper";
import Link from "../Link/Link";
import Popup from "../Popup/Popup";
import ToAppLevel from "../ToAppLevel";
import ToolTip from "../ToolTip/ToolTip";
import clsx from "clsx";
import { responsiveState } from "../utils";
import { useResize } from "../useResize";

const ActionBar: React.FC<ActionBarProps> = ({ collapsedAt, authorContent, productContent, authorAvatar }) => {
    const { sizeIndex } = useResize();
    const [sizeState, updateSizeState] = useState(null);
    const [opened, updateOpened] = useState(false);
    useEffect(() => {
        const sizing = responsiveState(sizeIndex, collapsedAt);
        if (sizing === 'desktop')
            return updateSizeState(null);
        updateSizeState(sizing);
    }, [sizeIndex, collapsedAt])

    return <ConditionalWrapper conditional={sizeState === 'mobile'} wrapper={children => <ToAppLevel>{children}</ToAppLevel>}>
        <div className={clsx("overlay", { open: opened })}></div>
        <div data-testid="ActionBar" className={clsx("ActionBar", sizeState)}>
            <Popup content={authorContent} position={sizeState ? 'b' : 'lt'} className={`${sizeState} ActionBar-Popup`} opened={updateOpened} addedPadding>
                <ToolTip message="Author" disabled={sizeState}>
                    <Avatar image={authorAvatar} initials="NO" size={sizeState ? sizeState === 'mobile' ? 'tiny' : 'small' : 'regular'} />
                    {sizeState && <Link>Author</Link>}
                </ToolTip>
            </Popup>
            <Popup content={productContent} position={sizeState ? 'b' : 'lt'} className={`${sizeState} ActionBar-Popup`} opened={updateOpened} addedPadding>
                <ToolTip message="Products" disabled={sizeState}>
                    {sizeState ?
                        sizeState === 'mobile' ? <Link icon="tags" iconSize={18}>Products</Link> : <Link icon="tags" iconSize={24}>Products</Link> :
                        <Button icon="tags" type="icon" iconSize={26} />
                    }
                </ToolTip>
            </Popup>
            <Popup
                opened={updateOpened}
                className={`${sizeState} ActionBar-Popup`}
                position={sizeState ? 'b' : 'l'}
                content={<div className="ActionBar-share">
                    <Button type="icon" icon="twitter" iconSize={18} />
                    <Button type="icon" icon="facebook" iconSize={18} />
                    <Button type="icon" icon="pinterest" iconSize={18} />
                    <Button type="icon" icon="email" iconSize={18} />
                    <Button type="icon" icon="link" iconSize={18} />
                </div>}
                width={160}
            >
                <ToolTip message="Share" disabled={sizeState}>
                    {sizeState ?
                        sizeState === 'mobile' ? <Link icon="send" iconSize={18}>Share</Link> : <Link icon="send" iconSize={24}>Share</Link> :
                        <Button icon="send" type="icon" iconSize={24} />}
                </ToolTip>
            </Popup>
        </div>
    </ConditionalWrapper>
};

ActionBar.defaultProps = {
    collapsedAt: [2, 3]
}

export default ActionBar;

