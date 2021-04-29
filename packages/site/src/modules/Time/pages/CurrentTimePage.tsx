import React from 'react';
import { useParams } from 'react-router';

import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import getConfig from '$Time/configs/getConfig';
import TimeProgress from '$Time/components/TimeProgress/TimeProgress';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    marginTop: 100,
    justifyContent: 'center',
    display: 'flex',
  },
  field: {
    width: 750,
    height: 500,
    padding: 50,
  },
  item: {
    padding: 10,
    height: 50,
  },
}));

const TimePage = () => {
  const classes = useStyles();
  const { key } = useParams<{key: string}>();
  const item: any = getConfig().find(({ label }) => label === key);

  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Paper className={classes.root}>
          <Grid container alignContent="flex-start" className={classes.field}>
            <Grid item md={12}>
              <TimeProgress {...item} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TimePage;
