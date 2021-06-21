import React from 'react';
import { useTranslation } from 'react-i18next';

import { List, Typography } from '@instant1100/ui-kit';

const UnavailableModuleWidget = () => {
  const { t } = useTranslation();

  return (
    <List>
      <Typography variant="h6" gutterBottom>
        {t('module/unavailable_module')}
      </Typography>
    </List>
  );
};

export default UnavailableModuleWidget;
