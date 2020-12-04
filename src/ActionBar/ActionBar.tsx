import "./ActionBar.scss";

import React, { useEffect, useState } from "react";

import { ActionBarProps } from "./ActionBar.types";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Link from "../Link/Link";
import PageContainer from "../PageContainer/PageContainer";
import Popup from "../Popup/Popup";
import ToolTip from "../ToolTip/ToolTip";
import clsx from "clsx";
import { responsiveState } from "../utils";
import { useResize } from "../useResize";

const ActionBar: React.FC<ActionBarProps> = ({ collapsedAt, authorContent, productContent, authorAvatar, steps, closeSteps }) => {
    const { sizeIndex } = useResize();
    const [sizeState, updateSizeState] = useState(null);
    const [tabOpen, updateTabOpen] = useState(false);
    useEffect(() => {
        const sizing = responsiveState(sizeIndex, collapsedAt);
        if (sizing === 'desktop')
            return updateSizeState(null);
        updateSizeState(sizing);
    }, [sizeIndex, collapsedAt]);

    return <div data-testid="ActionBar" className={clsx("ActionBar", sizeState)}>
        {console.log(tabOpen)}
        <div className="ActionBar-background"></div>
        {steps &&
            <Popup content={steps} position={sizeState ? 'bottomLeft' : 'leftTop'} className={`${sizeState} ActionBar-Popup`} fullWidth closePopup={closeSteps} opened={updateTabOpen}>
                <ToolTip message="Steps" disabled={sizeState}>
                    {sizeState && <Link icon="steps" iconSize={18}>Steps</Link>}
                </ToolTip>
            </Popup>
        }
        <Popup content={authorContent} position={sizeState ? 'bottomLeft' : 'leftTop'} className={`${sizeState} ActionBar-Popup`} addedPadding opened={updateTabOpen}>
            <ToolTip message="Author" disabled={sizeState}>
                <Avatar image={authorAvatar} initials="NO" size={sizeState ? sizeState === 'mobile' ? 'tiny' : 'small' : 'regular'} />
                {sizeState && <Link>Author</Link>}
            </ToolTip>
        </Popup>
        <Popup content={productContent} position={sizeState ? 'bottom' : 'left'} className={`${sizeState} ActionBar-Popup`} addedPadding opened={updateTabOpen}>
            <ToolTip message="Products" disabled={sizeState}>
                {sizeState ?
                    sizeState === 'mobile' ? <Link icon="tags" iconSize={18}>Products</Link> : <Link icon="tags" iconSize={24}>Products</Link> :
                    <Button icon="tags" type="icon" iconSize={26} />
                }
            </ToolTip>
        </Popup>
        <Popup
            className={`${sizeState} ActionBar-Popup`}
            position={sizeState ? 'bottomRight' : 'left'}
            content={<div className="ActionBar-share">
                <Button type="icon" icon="twitter" iconSize={18} />
                <Button type="icon" icon="facebook" iconSize={18} />
                <Button type="icon" icon="pinterest" iconSize={18} />
                <Button type="icon" icon="email" iconSize={18} />
                <Button type="icon" icon="link" iconSize={18} />
            </div>}
            width={160}
            opened={updateTabOpen}
        >
            <ToolTip message="Share" disabled={sizeState}>
                {sizeState ?
                    sizeState === 'mobile' ? <Link icon="send" iconSize={18}>Share</Link> : <Link icon="send" iconSize={24}>Share</Link> :
                    <Button icon="send" type="icon" iconSize={24} />}
            </ToolTip>
        </Popup>
    </div>
};

ActionBar.defaultProps = {
    collapsedAt: [2, 3]
}

export default ActionBar;

