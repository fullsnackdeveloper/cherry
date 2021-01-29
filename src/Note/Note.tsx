// import "./Note.scss";

import Icon from "../Icon/Icon";
import { NoteProps } from "./Note.types";
import React from "react";

const Note: React.FC<NoteProps> = ({ type, html }) => {
    const renderIcon = () => {
        switch (type) {
            case 'tip':
                return <Icon icon="remember" size={30} />
            case 'info':
                return <Icon icon="info" size={30} />
            case 'warning':
                return <Icon icon="warning" size={30} />
            default:
                return null;
        }
    }

    return <div data-testid="Note" className="Note">
        <div className="Note-icon">
            {renderIcon()}
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
};

export default Note;

