import React, { FC } from 'react';

import { LinearProgressWithLabel } from '@instant1100/ui-kit';

const LinearTimeSpend:FC<{fullWeeks: number, passedWeeks: number}> = ({
  fullWeeks,
  passedWeeks,
}) => {
  const progress = (passedWeeks / fullWeeks) * 100;

  return (
    <LinearProgressWithLabel variant="determinate" value={progress} />
  );
};

export default LinearTimeSpend;
