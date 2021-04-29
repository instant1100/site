import React, { FC } from 'react';

import LinearProgressWithLabel from '@material-ui/core/LinearProgress';

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
