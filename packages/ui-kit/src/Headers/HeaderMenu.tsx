import React, { FC } from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
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

type Section = {
  key: string,
  url: string,
  title: string,
}

type HeaderMenuProps = {
  component: React.ElementType,
  sections: Section[],
}

const HeaderMenu: FC<HeaderMenuProps> = ({ sections, component }) => {
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

export default HeaderMenu;
