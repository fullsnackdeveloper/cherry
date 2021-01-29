import Button from "./Button";
import React from "react";

export default {
    title: "Button",
    component: Button,
    argTypes: {
        children: {
            control: {
                type: 'text',
                defaultValue: 'click'
            }
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'regular', 'large']
            }
        },
        type: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'white', 'link']
            }
        },
        icon: {
            control: {
                type: 'select',
                options: [null, 'drill', 'chevron-left', 'close']
            }
        },
        iconSize: {
            control: {
                type: 'number'
            }
        }
    }
};

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
    children: 'Button text',
}

export const Secondary = () => <Button type="secondary">Click here</Button>;

export const White = () => <Button type="white">Click here</Button>;

export const Icon = () => <Button type="icon" icon="tags" iconSize={24}></Button>;

export const sizes = () => <div className="storybook-horizontal">
    <div className="storybook-spacer">
        <Button size="large">Click here</Button>
    </div>
    <div className="storybook-spacer">
        <Button size="regular">Click here</Button>
    </div>
    <div className="storybook-spacer">
        <Button size="small">Click here</Button>
    </div>
</div>

export const withIcon = () => <Button type="primary" icon="chevron-left">Click here</Button>;

export const onlyIcon = () => <Button type="primary" icon="chevron-left"></Button>;
