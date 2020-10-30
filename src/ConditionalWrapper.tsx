import React, { ReactNode } from 'react';

export interface ConditionalWrapperProps {
  children: ReactNode,
  wrapper: any,
  conditional: any
}

const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({ conditional, wrapper, children }) =>
  conditional ? wrapper(children) : children;

export default ConditionalWrapper;