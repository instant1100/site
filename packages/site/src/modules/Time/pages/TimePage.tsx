import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import { Grid, Paper, makeStyles } from '@instant1100/ui-kit';

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
    padding: 50,
  },
  item: {
    padding: 10,
    display: 'block',
  },
}));

const TimePage = () => {
  const classes = useStyles();
  const config = getConfig();
  const { url: baseUrl } = useRouteMatch();
  const history = useHistory();
  const handleClick = (path: string) => {
    history.push(path);
  };

  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Paper className={classes.root}>
          <Grid container alignContent="flex-start" className={classes.field}>
            <Grid item md={12}>
              {config.map((item: any) => (
                <button type="button" onClick={() => handleClick(`${baseUrl}/${item.label}`)} key={item.label}>
                  <TimeProgress {...item} />
                </button>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TimePage;
