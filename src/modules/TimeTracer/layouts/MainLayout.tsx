import React, { FC } from 'react';

import BaseLayout from '@/ui-kit/layouts/BaseLayout';
import TimeTracerMenu from '$TimeTracer/menu/TimeTracerMenu';
import { BaseLayoutProps } from '/ui-kit/layouts/interfaces';

const MainLayout: FC<BaseLayoutProps> = (props) => {
  return (
    <BaseLayout
      menu={<TimeTracerMenu />}

      {...props}
    />
  );
};

export default MainLayout;
