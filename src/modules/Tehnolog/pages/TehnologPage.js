import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArmListForm from '$Tehnolog/components/ArmListForm';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  field: {
    width: 750,
  },
}));

const TehnologPage = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Paper className={classes.root}>
          <Grid container alignContent="center" alignItems="center" className={classes.field}>
            <Grid item md={12}>
              <ArmListForm />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TehnologPage;
