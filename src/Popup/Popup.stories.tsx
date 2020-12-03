import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";
import Link from "../Link/Link";
import Popup from "./Popup";
import React from "react";
import ToolTip from "../ToolTip/ToolTip";

export default {
    title: "Popup",
    component: Popup
};

export const Default = (args) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
    <Popup position={args.position} content={
        [<Card
            key={1}
            title="7 Quick and Easy Ways to Refresh Your Home on a Budget"
            type="post"
            size="list"
            image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            author="Bill Winkle"
        />,
        <Card
            key={2}
            title="7 Quick and Easy Ways to Refresh Your Home on a Budget"
            type="post"
            size="list"
            image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            author="Bill Winkle"
        />,
        <Card
            key={3}
            title="This is the article with no title to display but tells you how to make a lavender candle"
            type="post"
            size="list"
            image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />]
    }>
        <ToolTip message="Avatar">
            <Avatar />
            <Link>Author</Link>
        </ToolTip>
    </Popup>
</div>