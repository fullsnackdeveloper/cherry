import Button from "../Button/Button";
import Card from "../Card/Card";
import Drawer from "./Drawer";
import React from "react";

export default {
    title: "Drawer",
    component: Drawer
};

export const Default = (args) => {
    const [open, updateOpen] = React.useState(false);
    return <div style={{ minHeight: 300 }}>
        <Button onClick={() => updateOpen(!open)}>Open Drawer</Button>
        <Drawer open={open} position={args.position} updateOpen={updateOpen}>
            <Card
                key={1}
                title="7 Quick and Easy Ways to Refresh Your Home on a Budget"
                type="post"
                size="list"
                image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                author="Bill Winkle"
            />
            <Card
                key={2}
                title="7 Quick and Easy Ways to Refresh Your Home on a Budget"
                type="post"
                size="list"
                image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                author="Bill Winkle"
            />
        </Drawer>
    </div>
}
