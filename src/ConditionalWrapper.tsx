import React, { ReactNode } from 'react';

export interface ConditionalWrapperProps {
  children: ReactNode,
  wrapper: any,
  conditional: any,
  props?: any
}

const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({ conditional, wrapper, children, props }) =>
  conditional ? wrapper(children, props) : children;

export default ConditionalWrapper;