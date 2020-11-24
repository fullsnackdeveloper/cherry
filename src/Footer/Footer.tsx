
import React from "react";

import { FooterProps } from "./Footer.types";

import "./Footer.scss";

const Footer: React.FC<FooterProps> = ({ children }) => (
    <div data-testid="Footer" className="Footer">{children}</div>
);

export default Footer;

