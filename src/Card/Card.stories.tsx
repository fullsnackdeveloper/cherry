import Card from "./Card";
import React from "react";

export default {
    title: "Card",
    component: Card
};

export const Default = () => <div style={{ maxWidth: 250 }}>
    <Card
        title="How To Install A Kitchen Backsplash"
        category="Home Improvement"
        image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        icon="learn"
        iconMessage="This piece of content is a lesson"
        onClick={() => alert('clicked')}
    />
</div>;

export const Category = () => <div style={{ maxWidth: 250 }}>
    <Card
        title="Home Improvement"
        type="category"
        size="small"
        image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    />
</div>;

export const List = () => <div style={{ maxWidth: 320 }}>
    <Card
        title="7 Quick and Easy Ways to Refresh Your Home on a Budget"
        type="post"
        size="list"
        image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        author="Bill Winkle"
    />
    <Card
        title="7 Quick and Easy Ways to Refresh Your Home on a Budget"
        type="post"
        size="list"
        image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        author="Bill Winkle"
    />
    <Card
        title="This is the article with no title to display but tells you how to make a lavender candle"
        type="post"
        size="list"
        image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    />
</div>;
