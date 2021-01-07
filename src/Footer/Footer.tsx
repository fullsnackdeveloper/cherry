// import "./Footer.scss";

import { FooterProps } from "./Footer.types";
import React from "react";

const Footer: React.FC<FooterProps> = ({ copyright, children }) => (
    <div data-testid="Footer" className="Footer">
        {children}
        <div className="Footer-copyright">{copyright}</div>
    </div>
);

export default Footer;

