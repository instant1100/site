import React from 'react';
import PropTypes from 'prop-types';
import {i18n} from 'i18next';

import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Subscribe from '@/core/features/Subscribe/Subscribe';
import InDeveloping from '@/core/features/InDeveloping/InDeveloping';
import {useTranslation} from 'react-i18next';
import LanguageSwitcher from '@/modules/_main/components/LanguageSwitcher/LanguageSwitcher';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    flex: 0.2,
    display: 'flex',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const HeaderDefault = ({ title }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Toolbar className={classes.toolbar}>

        <Subscribe>
          {({onClick}) => <Button size="small" onClick={onClick}>{t('Subscribe')}</Button>}
        </Subscribe>

        <Typography
          component={Link}
          to="/"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <InDeveloping>
          {({onClick}) =>(
            <IconButton onClick={onClick}>
              <SearchIcon />
            </IconButton>
          )}
        </InDeveloping>
        <div className={classes.toolbarSecondary}>
          <InDeveloping>
            {({onClick}) =>(
              <Button onClick={onClick} variant="outlined" size="small">
                {t('Sign up')}
              </Button>
            )}
          </InDeveloping>
          <LanguageSwitcher />
        </div>
      </Toolbar>
    </>
  );
};

HeaderDefault.propTypes = {
  title: PropTypes.string,
};

export default HeaderDefault;
