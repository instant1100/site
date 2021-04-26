import React, { FC } from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

const DefaultFormPaper: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      {children}
    </Paper>
  );
};

DefaultFormPaper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultFormPaper;
