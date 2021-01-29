import React from 'react';

export const childrenWithProps = (children, props) => {
  return React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });
}

export const responsiveState = (sizeIndex, collapsedAt) => {
  let navState = 'desktop';
  if (!collapsedAt)
    return navState;
  if (sizeIndex <= collapsedAt[1])
    navState = 'tablet'
  if (sizeIndex <= collapsedAt[0])
    navState = 'mobile'
  return navState;
}