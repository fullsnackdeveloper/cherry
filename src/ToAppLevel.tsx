import React, { ReactNode } from 'react';

import ReactDOM from 'react-dom';

export interface ToAppLevelProps {
  children: ReactNode;
}

const ToAppLevel: React.FC<ToAppLevelProps> = ({ children }) => ReactDOM.createPortal(
  children,
  document.body
);

export default ToAppLevel;
