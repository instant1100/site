import Paper from '@material-ui/core/Paper';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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

const DefaultFormPaper = ({ children }) => {
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
