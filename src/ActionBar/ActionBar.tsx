import "./ActionBar.scss";

import React, { useEffect, useRef, useState } from "react";

import { ActionBarProps } from "./ActionBar.types";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Link from "../Link/Link";
import Popup from "../Popup/Popup";
import ToolTip from "../ToolTip/ToolTip";
import clsx from "clsx";
import copy from "copy-to-clipboard";
import { responsiveState } from "../utils";
import { useResize } from "../useResize";

const ActionBar: React.FC<ActionBarProps> = ({ copyClick, shareLink, showDepth, collapsedAt, authorContent, productContent, authorAvatar, steps, onStepsClick, top }) => {
    const scroll = useRef(0);
    const { sizeIndex } = useResize();
    const [sizeState, updateSizeState] = useState(null);
    const [showActionBar, updateShowActionBar] = useState(false);
    const [openPopups, updateOpenPopups] = useState([]);
    const [canScroll, updateCanScroll] = useState<boolean>(true);

    useEffect(() => {
        const sizing = responsiveState(sizeIndex, collapsedAt);
        if (sizing === 'desktop')
            return updateSizeState(null);
        updateSizeState(sizing);
    }, [sizeIndex, collapsedAt]);

    const listenToScroll = () => {
        let y = window.pageYOffset;
        if (scroll.current > y) {
            scroll.current = y;
            return updateShowActionBar(false);
        }
        if (scroll.current <= y) {
            if (y >= showDepth) {
                updateShowActionBar(true);
            } else {
                updateShowActionBar(false);
            }
        }
        scroll.current = y;
    }

    useEffect(() => {
        if (canScroll) {
            document.body.style.overflow = "inherit";
        } else {
            document.body.style.overflow = "hidden";
        }
    }, [canScroll]);

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => {
            window.removeEventListener('scroll', listenToScroll)
        }
    }, []);

    const handleOpened = (bool, index) => {
        let newPopups = openPopups;
        newPopups[index] = bool;
        if (newPopups.includes(true)) {
            updateCanScroll(false)
        } else {
            updateCanScroll(true)
        }
        updateOpenPopups(newPopups);
    }

    const handleSocialShare = type => () => {
        let link = '';
        switch (type) {
            case 'facebook':
                link = `https://www.facebook.com/sharer/sharer.php?u=${shareLink}`;
                break;
            case 'twitter':
                link = `https://twitter.com/intent/tweet?url=${shareLink}&text=`;
                break;
            case 'pinterest':
                link = `https://pinterest.com/pin/create/button/?url=${shareLink}&media=&description=`;
                break;
            case 'email':
                link = `mailto:info@example.com?&subject=&body=${shareLink}`;
                break;
            case 'copy':
                copy(shareLink);
                copyClick && copyClick(shareLink);
            default:
                break;
        }
        window?.open(link, "name", "width=600, height=400");
    }

    return <div data-testid="ActionBar" className={clsx("ActionBar", sizeState, { showActionBar })} style={{ top: sizeState ? 0 : top }}>
        <div className="ActionBar-background"></div>
        {steps &&
            <ToolTip message="Steps" disabled={sizeState}>
                {sizeState && <Link icon="steps" iconSize={18} onClick={onStepsClick}>Steps</Link>}
            </ToolTip>
        }
        <Popup content={authorContent} position={sizeState ? 'bottomLeft' : 'leftTop'} className={`${sizeState} ActionBar-Popup`} addedPadding opened={bool => handleOpened(bool, 1)}>
            <ToolTip message="Author" disabled={sizeState}>
                <Avatar image={authorAvatar} initials="NO" size={sizeState ? sizeState === 'mobile' ? 'tiny' : 'small' : 'regular'} />
                {sizeState && <Link>Author</Link>}
            </ToolTip>
        </Popup>
        {productContent &&
            <Popup content={productContent} position={sizeState ? 'bottom' : 'left'} className={`${sizeState} ActionBar-Popup`} addedPadding opened={bool => handleOpened(bool, 2)}>
                <ToolTip message="Products" disabled={sizeState}>
                    {sizeState ?
                        sizeState === 'mobile' ? <Link icon="tags" iconSize={18}>Products</Link> : <Link icon="tags" iconSize={24}>Products</Link> :
                        <Button icon="tags" type="icon" iconSize={26} />
                    }
                </ToolTip>
            </Popup>
        }
        <Popup
            addedPadding
            className={`${sizeState} ActionBar-Popup`}
            position={sizeState ? 'bottomRight' : 'left'}
            content={<div className="ActionBar-share">
                <Button type="icon" icon="twitter" iconSize={24} onClick={handleSocialShare('twitter')} />
                <Button type="icon" icon="facebook" iconSize={24} onClick={handleSocialShare('facebook')} />
                <Button type="icon" icon="pinterest" iconSize={24} onClick={handleSocialShare('pinterest')} />
                <Button type="icon" icon="email" iconSize={24} onClick={handleSocialShare('email')} />
                <Button type="icon" icon="link" iconSize={24} />
            </div>}
            width={240}
            opened={bool => handleOpened(bool, 3)}
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

