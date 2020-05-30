import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: 'flex-start',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const HeaderMenu = ({sections, component}) => {
  const classes = useStyles();

  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      {sections.map((section) => (
        <Link
          color="inherit"
          noWrap
          key={section.id}
          variant="body2"
          className={classes.toolbarLink}
          component={component}
          to={section.url}
        >
          {section.title}
        </Link>
      ))}
    </Toolbar>
  )
};

export default HeaderMenu;
