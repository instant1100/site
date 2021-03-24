import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouteMatch, useHistory } from 'react-router-dom';
import TimeProgress from '$Time/components/TimeProgress/TimeProgress';
import getConfig from '$Time/configs/getConfig';

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
  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Paper className={classes.root}>
          <Grid container alignContent="start" className={classes.field}>
            <Grid item md={12}>
              {config.map((item) => (
                <button type="button" onClick={() => handleClick(`${baseUrl}/${item.label}`)} key={item.label}>
                  <TimeProgress className={classes.item} {...item} />
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
