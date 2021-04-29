import React, { FC } from 'react';

import { sum } from '../pureFunction/pureFunction';

type SumProps = {
  a: number,
  b: number,
}

export const Sum: FC<SumProps> = ({ a, b }) => {
  return <div>{sum(a, b)}</div>;
};
