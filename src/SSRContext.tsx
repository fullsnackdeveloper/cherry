import React from 'react';

const SSRContext = React.createContext({});

const SSRProvider = (props) => {
  return (
    <SSRContext.Provider value={true}>
      {props.children}
    </SSRContext.Provider>
  );
}

export { SSRContext, SSRProvider };