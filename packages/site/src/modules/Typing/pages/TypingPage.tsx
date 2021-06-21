import React from 'react';
import { Grid, Paper, makeStyles } from '@instant1100/ui-kit';

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
    background: 'black',
    width: 750,
    height: 500,
  },
}));

const TypingPage = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Paper className={classes.root}>
          <Grid container alignContent="center" alignItems="center" className={classes.field}>
            <Grid item md={12}>
              3333
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TypingPage;
