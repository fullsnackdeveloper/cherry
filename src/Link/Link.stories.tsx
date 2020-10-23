import Link from "./Link";
import React from "react";

export default {
    title: "Link",
    component: Link,
    argTypes: {
        children: {
            control: {
                type: 'text'
            }
        },
        icon: {
            control: {
                type: 'select',
                options: [null, 'drill', 'discover', 'close', 'home', 'categories']
            }
        }
    }
};

const Template = (args) => <Link {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'this is a link',
}

export const withIcon = () => <Link icon="discover">Discover</Link>
