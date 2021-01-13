import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import getProgress from '$Typing/utils/getProgress';
import LinearTimeSpend from '$Time/components/TimeProgress/LinearTimeSpend';
import TableTimeSpend from '$Time/components/TimeProgress/TableTimeSpend';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'block',
    width: '100%',
  },
  label: {
    display: 'block',
    width: '100%',
  },
}));

const TimeProgress = ({
  start,
  end,
  label,
}) => {
  const { fullWeeks, passedWeeks } = getProgress(start, end);
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <LinearTimeSpend fullWeeks={fullWeeks} passedWeeks={passedWeeks} />
      <TableTimeSpend fullWeeks={fullWeeks} passedWeeks={passedWeeks} />
    </div>
  );
};

export default TimeProgress;
