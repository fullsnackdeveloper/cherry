import "./Modal.scss";

import Icon from "../Icon/Icon";
import { ModalProps } from "./Modal.types";
import React from "react";
import clsx from "clsx";
import pattern1 from '../images/pattern1.png';
import pattern2 from '../images/pattern2.png';
import pattern3 from '../images/pattern3.png';
import pattern4 from '../images/pattern4.png';

const Modal: React.FC<ModalProps> = ({ open, close, maxWidth, children }) => {

    const handleClose = () => {
        close && close();
    }

    return <div className={clsx("Modal-overlay", { open })} onClick={handleClose}>
        <div
            data-testid="Modal"
            className={clsx("Modal", { open })}
            style={{
                maxWidth
            }}
        >
            <div className="Modal-close" onClick={handleClose}>
                <Icon icon="close" size={14} />
            </div>
            <img src={pattern1} alt="pattern 1" className="pattern pattern1" />
            <img src={pattern2} alt="pattern 2" className="pattern pattern2" />
            <img src={pattern3} alt="pattern 3" className="pattern pattern3" />
            <img src={pattern4} alt="pattern 4" className="pattern pattern4" />
            <div className="Modal-content">
                {children}
            </div>
        </div>
    </div>
};

export default Modal;

