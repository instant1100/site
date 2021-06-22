import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

import HeaderMenu from '@instant1100/ui-kit/src/Headers/HeaderMenu';
import modulesList from '../../../../modulesList';

const DefaultMenu = () => {
  const { t } = useTranslation();

  const menuItems = modulesList
    .filter((item) => item.checkHook())
    .map((item) => ({
      ...item,
      title: t(`menu/${item.key}`),
      key: item.key,
      url: item.path,
    }));

  return <HeaderMenu sections={menuItems} component={Link} />;
};

export default DefaultMenu;
