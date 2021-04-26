import HeaderMenu from '@/ui-kit/Headers/HeaderMenu';
import { Link } from 'react-router-dom';
import React from 'react';
import useCreateMenu from '/core/menu/useCreateMenu';

const pageList = [
  {
    key: 'rest',
    path: '/',
    title: 'time_tracer_menu/rest',
  },
  {
    key: 'stream_watch',
    path: '/stream_watch',
    title: 'time_tracer_menu/stream_watch',
  },
];

const TimeTracerMenu = () => {
  const menuItems = useCreateMenu(pageList);

  return <HeaderMenu sections={menuItems} component={Link} />;
};

export default TimeTracerMenu;
