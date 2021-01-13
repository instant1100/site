import React from 'react';
import { sum } from '../pureFunction/pureFunction';

export const Sum = ({ a, b }) => {
  return <div>{sum(a, b)}</div>;
};
