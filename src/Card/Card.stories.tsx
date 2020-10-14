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
