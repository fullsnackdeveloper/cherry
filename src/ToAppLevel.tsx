import React, { ReactNode } from 'react';

import ReactDOM from 'react-dom';
import { SSRContext } from './SSRContext';
import { UniversalPortal } from '@jesstelford/react-portal-universal';
import _ from 'lodash';

export interface ToAppLevelProps {
  children: ReactNode;
}

const ToAppLevel: React.FC<ToAppLevelProps> = ({ children }) => {

  return <SSRContext.Consumer>
    {value => {
      return !_.isEmpty(value) ?
        <UniversalPortal selector="#portal">
          {children}
        </UniversalPortal> :
        ReactDOM.createPortal(children, document.body)
    }}
  </SSRContext.Consumer>
};

export default ToAppLevel;
