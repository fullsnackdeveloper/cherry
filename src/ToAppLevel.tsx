import React, { ReactNode, useEffect, useState } from 'react';

import { UniversalPortal } from '@jesstelford/react-portal-universal';

export interface ToAppLevelProps {
  children: ReactNode;
}

const ToAppLevel: React.FC<ToAppLevelProps> = ({ children }) => {

  return <UniversalPortal selector="#portal">
    {children}
  </UniversalPortal>
};

export default ToAppLevel;
