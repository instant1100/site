import React from 'react';

import LinearProgressWithLabel from '@material-ui/core/LinearProgress';

const LinearTimeSpend = ({
  fullWeeks,
  passedWeeks,
}) => {
  const progress = (passedWeeks / fullWeeks) * 100;

  return (
    <LinearProgressWithLabel variant="determinate" value={progress} />
  );
};

export default LinearTimeSpend;
