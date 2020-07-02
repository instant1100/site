import React from 'react';

import BaseLayout from '@/ui-kit/layouts/BaseLayout';
import TimeTracerMenu from '$TimeTracer/menu/TimeTracerMenu';

const MainLayout = (props) => {
  return (
    <BaseLayout
      {...props}
      menu={<TimeTracerMenu />}
    />
  );
};

export default MainLayout;
