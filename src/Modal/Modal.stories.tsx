import React, { useState } from "react";

import Button from "../Button/Button";
import Modal from "./Modal";

export default {
    title: "Modal",
    component: Modal
};

export const Default = () => {
    const [modal, openModal] = useState(false);

    const handleOpen = () => {
        openModal(true);
    }

    const handleClose = () => {
        openModal(false);
    }

    return <>
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal maxWidth={800} open={modal} close={handleClose}>
            <div style={{
                textAlign: "center",
                padding: "160px",
                maxWidth: 300,
                margin: "0 auto"
            }}>
                <h2>Thank You! We Have Received Your Message.</h2>
                <p style={{ margin: "24px 0" }}>We're looking forward to hearing what you have to say.</p>
                <Button size="large">Ok</Button>
            </div>
        </Modal>
    </>
};
