import Icon from "./Icon";
import React from "react";
import { icons } from './../consts';

export default {
    title: "Icon",
    component: Icon
};

export const Default = () => <div className="storybook-horizontal">
    {icons.map(i => {
        return <div key={i} className="storybook-spacer">
            <Icon icon={i} />
        </div>
    })}
</div>
export const Size = () => <div className="storybook-horizontal">
    <div className="storybook-spacer">
        <Icon icon="drill" size={16}></Icon>
    </div>
    <div className="storybook-spacer">
        <Icon icon="drill" size={24}></Icon>
    </div>
    <div className="storybook-spacer">
        <Icon icon="drill" size={32}></Icon>
    </div>
    <div className="storybook-spacer">
        <Icon icon="drill" size={64}></Icon>
    </div>
    <div className="storybook-spacer">
        <Icon icon="drill" size={86}></Icon>
    </div>
</div>
