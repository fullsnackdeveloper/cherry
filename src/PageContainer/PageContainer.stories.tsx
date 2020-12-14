import ActionCard from "../ActionCard/ActionCard";
import Card from '../Card/Card';
import Col from '../Col/Col';
import Header from "../Header/Header";
import Navbar from "../NavBar/NavBar";
import PageContainer from "./PageContainer";
import React from "react";
import Row from '../Row/Row';
import logo from '../images/logo.png';
import mobileLogo from '../images/logo-horizontal.png';

export default {
    title: "PageContainer",
    component: PageContainer
};

export const Default = () => <PageContainer collapsedAt={[2, 3]}>
    <Navbar
        onNavigate={link => console.log(link)}
        logo={logo}
        mobileLogo={mobileLogo}
        collapsedAt={[2, 3]}
        menu={[
            {
                title: 'home',
                icon: 'home',
                link: '/'
            },
            {
                title: 'discover',
                icon: 'discover',
                link: '/discover'
            },
            {
                title: 'categories',
                icon: 'categories',
                link: '/categories'
            },
            {
                title: 'more',
                icon: 'more',
                children: [
                    {
                        title: 'about',
                        link: '/about'
                    },
                    {
                        title: 'contact',
                        link: '/contact'
                    },
                    {
                        title: 'contact',
                        link: '/contact'
                    },
                    {
                        title: 'contact',
                        link: '/contact'
                    },
                    {
                        title: 'contact',
                        link: '/contact'
                    },
                    {
                        title: 'contact',
                        link: '/contact'
                    },
                    {
                        title: 'contact',
                        link: '/contact'
                    },
                    {
                        title: 'contact',
                        link: '/contact'
                    },
                    {
                        title: 'contact',
                        link: '/contact'
                    },
                    {
                        title: 'contact',
                        link: '/contact'
                    }
                ]
            }
        ]}
    />
    <Header
        title="Header Title"
        subTitle="We’re here to help you out with whatever project you are working on, let’s DIY together!"
        image={{
            src: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            alt: "header image"
        }}
    ></Header>
    <Row columns={3}>
        <Col>
            <ActionCard
                title="Fix it"
                linkText="See All DIY Projects"
                image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                color="#c69e7c"
            />
        </Col>
        <Col>
            <ActionCard
                title="Fix it"
                linkText="See All DIY Projects"
                image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                color="#c69e7c"
            />
        </Col>
        <Col>
            <ActionCard
                title="Fix it"
                linkText="See All DIY Projects"
                image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                color="#c69e7c"
            />
        </Col>
    </Row>
    <Row>
        <Col span={3}>
            <Card
                icon="learn"
                iconMessage="This piece of content is a lesson"
                title="How To Install A Kitchen Backsplash"
                category="Home Improvement"
                image="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
            />
        </Col>
        <Col span={3}>
            <Card
                icon="learn"
                iconMessage="This piece of content is a lesson"
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
</PageContainer>;
