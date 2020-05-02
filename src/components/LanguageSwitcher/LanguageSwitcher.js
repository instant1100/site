import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import i18n, { languages } from '@/core/i18n/i18n';

const LanguageSwitcher = () => {
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Select
      labelId="LanguageSwitcher"
      id="LanguageSwitcher"
      value={i18n.language}
      onChange={changeLanguage}
    >
      {languages.map(({id}) => <MenuItem key={id} value={id}>{id}</MenuItem>)};

    </Select>
  )
};

export default React.memo(LanguageSwitcher);