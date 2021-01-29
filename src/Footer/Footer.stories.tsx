import Col from '../Col/Col';
import Footer from "./Footer";
import Link from '../Link/Link';
import React from "react";
import Row from '../Row/Row';

export default {
    title: "Footer",
    component: Footer
};

export const Default = () => <Footer copyright="Makey© 2020 | version 4883212093">
    <Row>
        <Col span={[12, 6, 4]}>
            <h3>Discover The How-To Home Base</h3>
            <div className="Footer-links">
                <Link>Home Repair</Link>
                <Link>DIY Projects</Link>
                <Link>Home Decor</Link>
            </div>
        </Col>
        <Col span={[12, 6, 8]}>
            <h3>More Makey</h3>
            <div className="Footer-links">
                <Link>About Us</Link>
                <Link>Contact</Link>
                <Link>Terms Of Use</Link>
                <Link>Privacy</Link>
            </div>
        </Col>
    </Row>
</Footer>;
