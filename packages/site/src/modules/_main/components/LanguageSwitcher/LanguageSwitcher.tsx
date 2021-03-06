import React from 'react';
import { Select, MenuItem } from '@instant1100/ui-kit';

import i18n, { languages } from '../../../../i18n/i18n';

const LanguageSwitcher = () => {
  const changeLanguage = (e: any) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Select
      labelId="LanguageSwitcher"
      id="LanguageSwitcher"
      value={i18n.language}
      onChange={changeLanguage}
    >
      {languages.map(({ id }) => {
        return (
          <MenuItem key={id} value={id}>{id}</MenuItem>
        );
      })}
    </Select>
  );
};

export default React.memo(LanguageSwitcher);
