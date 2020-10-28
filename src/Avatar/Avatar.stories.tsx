import Avatar from "./Avatar";
import React from "react";

export default {
    title: "Avatar",
    component: Avatar
};

export const Default = () => <Avatar />;
export const Size = () => <div style={{ display: 'flex' }}>
    <div className="storybook-spacer">
        <Avatar size="huge" />
    </div>
    <div className="storybook-spacer">
        <Avatar size="large" />
    </div>
    <div className="storybook-spacer">
        <Avatar size="regular" />
    </div>
    <div className="storybook-spacer">
        <Avatar size="small" />
    </div>
    <div className="storybook-spacer">
        <Avatar size="tiny" />
    </div>
</div>
export const Status = () => <div style={{ display: 'flex' }}>
    <div className="storybook-spacer">
        <Avatar />
    </div>
    <div className="storybook-spacer">
        <Avatar status={1} />
    </div>
    <div className="storybook-spacer">
        <Avatar status={2} />
    </div>
    <div className="storybook-spacer">
        <Avatar status={3} />
    </div>
    <div className="storybook-spacer">
        <Avatar status={4} />
    </div>
    <div className="storybook-spacer">
        <Avatar status={5} />
    </div>
</div>
