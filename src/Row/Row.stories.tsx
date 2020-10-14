import Card from "../Card/Card";
import Col from "../Col/Col";
import React from "react";
import Row from "./Row";

export default {
    title: "Grid/Row",
    component: Row
};

export const Default = () => <Row>
    <Col span={3}>
        <Card
            title="How To Install A Kitchen Backsplash"
            category="Home Improvement"
            image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
    </Col>
    <Col span={3}>
        <Card
            title="How To Install A Kitchen Backsplash"
            category="Home Improvement"
            image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
    </Col>
    <Col span={3}>
        <Card
            title="How To Install A Kitchen Backsplash"
            category="Home Improvement"
            image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
    </Col>
    <Col span={3}>
        <Card
            title="How To Install A Kitchen Backsplash"
            category="Home Improvement"
            image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
    </Col>
</Row>;

export const Set5Columns = () => <Row columns={5}>
    <Col span={1}>
        <Card
            title="How To Install A Kitchen Backsplash"
            category="Home Improvement"
            image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
    </Col>
    <Col span={1}>
        <Card
            title="How To Install A Kitchen Backsplash"
            category="Home Improvement"
            image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
    </Col>
    <Col span={1}>
        <Card
            title="How To Install A Kitchen Backsplash"
            category="Home Improvement"
            image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
    </Col>
    <Col span={1}>
        <Card
            title="How To Install A Kitchen Backsplash"
            category="Home Improvement"
            image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
    </Col>
    <Col span={1}>
        <Card
            title="How To Install A Kitchen Backsplash"
            category="Home Improvement"
            image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
    </Col>
</Row>;
