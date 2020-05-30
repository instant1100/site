import React from 'react';

const CheckComponent = ({children, check}) => {
  const available = check();

  return available && children;
};

export default CheckComponent;
