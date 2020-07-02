import HeaderMenu from '@/ui-kit/Headers/HeaderMenu';
import { Link, useRouteMatch } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

const pageList = [
  {
    key: 'rest',
    path: '/',
  },
  {
    key: 'stream_watch',
    path: '/stream_watch',
  },
];

const TimeTracerMenu = () => {
  const { url } = useRouteMatch();
  const { t } = useTranslation();

  const menuItems = pageList
    .map((item) => ({
      ...item,
      title: t(`time_tracer_menu/${item.key}`),
      key: item.key,
      url: url + item.path,
    }));

  return <HeaderMenu sections={menuItems} component={Link} />;
};

export default TimeTracerMenu;
