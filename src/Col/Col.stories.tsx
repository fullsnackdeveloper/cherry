import Col from "./Col";
import React from "react";
import Row from "../Row/Row";

export default {
    title: "Grid/Col",
    component: Col
};

export const Default = () => <Row>
    <Col span={[12, 6, 4, 3, 2]}>
        <div style={{ width: 'calc(100% - 32)', background: 'lightgray', padding: 16, borderRadius: 8 }}>Col 1</div>
    </Col>
    <Col span={[12, 6, 4, 3, 2]}>
        <div style={{ width: 'calc(100% - 32)', background: 'lightgray', padding: 16, borderRadius: 8 }}>Col 1</div>
    </Col>
    <Col span={[12, 6, 4, 3, 2]}>
        <div style={{ width: 'calc(100% - 32)', background: 'lightgray', padding: 16, borderRadius: 8 }}>Col 1</div>
    </Col>
    <Col span={[12, 6, 4, 3, 2]}>
        <div style={{ width: 'calc(100% - 32)', background: 'lightgray', padding: 16, borderRadius: 8 }}>Col 1</div>
    </Col>
    <Col span={[12, 6, 4, 3, 2]}>
        <div style={{ width: 'calc(100% - 32)', background: 'lightgray', padding: 16, borderRadius: 8 }}>Col 1</div>
    </Col>
    <Col span={[12, 6, 4, 3, 2]}>
        <div style={{ width: 'calc(100% - 32)', background: 'lightgray', padding: 16, borderRadius: 8 }}>Col 1</div>
    </Col>
</Row>
