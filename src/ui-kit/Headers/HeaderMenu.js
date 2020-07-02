import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: 'flex-start',
    overflowX: 'auto',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const HeaderMenu = ({ sections, component }) => {
  const classes = useStyles();

  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      {sections.map((section) => (
        <Link
          color="inherit"
          noWrap
          key={section.key}
          variant="body2"
          className={classes.toolbarLink}
          component={component}
          to={section.url}
        >
          {section.title}
        </Link>
      ))}
    </Toolbar>
  );
};

HeaderMenu.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({
      render: PropTypes.func.isRequired,
    }),
  ]).isRequired,

  sections: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default HeaderMenu;
