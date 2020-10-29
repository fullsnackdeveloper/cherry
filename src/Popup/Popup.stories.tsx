import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";
import Popup from "./Popup";
import React from "react";
import ToolTip from "../ToolTip/ToolTip";

export default {
    title: "Popup",
    component: Popup
};

export const Default = () => <Popup content={
    [<Card
        title="7 Quick and Easy Ways to Refresh Your Home on a Budget"
        type="post"
        size="list"
        image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        author="Bill Winkle"
    />,
    <Card
        title="7 Quick and Easy Ways to Refresh Your Home on a Budget"
        type="post"
        size="list"
        image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        author="Bill Winkle"
    />,
    <Card
        title="This is the article with no title to display but tells you how to make a lavender candle"
        type="post"
        size="list"
        image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    />]
}>
    <ToolTip message="Avatar">
        <Avatar />
    </ToolTip>
</Popup>;

export const PopupTitle = () => <Popup
    title="More originally Contributed by Emily Mcwilliams"
    content={
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
    </ToolTip>
</Popup>;
