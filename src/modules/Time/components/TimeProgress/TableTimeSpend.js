import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    '&::after': {
      content: '""',
      clear: 'both',
      display: 'table',
    },
  },
  week: {
    float: 'left',
    width: 10,
    height: 7,
    borderRadius: 2,
    borderColor: 'grey',
    border: '1px solid',
    backgroundColor: 'white',
    margin: 2,
  },
  passed: {
    float: 'left',
    width: 10,
    height: 7,
    borderRadius: 2,
    backgroundColor: 'blue',
    margin: 2,
  },
}));

const TableTimeSpend = ({
  fullWeeks,
  passedWeeks,
}) => {
  const classes = useStyles();

  const weeks = new Array(Math.ceil(fullWeeks)).fill('').map((_, index) => ({
    key: index,
    passed: index < passedWeeks,
  }));

  return (
    <div className={classes.wrapper}>
      {weeks.map(({ passed, key }) => (
        <div key={key} className={passed ? classes.passed : classes.week} />
      ))}
    </div>
  );
};

export default TableTimeSpend;
