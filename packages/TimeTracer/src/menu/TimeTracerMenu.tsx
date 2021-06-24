import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderMenu } from '@instant1100/ui-kit';
import { useCreateMenu } from '@instant1100/core';


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
