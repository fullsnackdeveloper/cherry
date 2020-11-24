import React, { ReactNode } from 'react';

import ReactDOM from 'react-dom';
import { UniversalPortal } from '@jesstelford/react-portal-universal';
import _ from 'lodash';

export interface ToAppLevelProps {
  children: ReactNode;
}

const ToAppLevel: React.FC<ToAppLevelProps> = ({ children }) => {

  return (
    // ReactDOM.createPortal(children, document.body);
    <UniversalPortal selector="#portal">
      {children}
    </UniversalPortal>
  )
};

export default ToAppLevel;
