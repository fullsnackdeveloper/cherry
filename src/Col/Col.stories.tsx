import Col from "./Col";
import React from "react";

export default {
    title: "Grid/Col",
    component: Col
};

export const Default = () => <Col>
    <div style={{ width: 'calc(100% - 32)', background: 'lightgray', padding: 16, borderRadius: 8 }}>Col 1</div>
</Col>;
