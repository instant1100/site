import List from '@material-ui/core/List';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {useTranslation} from 'react-i18next';

const UnavailableModuleWidget = () => {
  const {t} = useTranslation();

  return (
    <List>
      <Typography variant="h6" gutterBottom>
        {t('module/unavailable_module')}
      </Typography>
    </List>
    )
};

export default UnavailableModuleWidget;
