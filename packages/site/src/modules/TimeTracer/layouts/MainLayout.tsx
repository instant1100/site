import React, { FC } from 'react';

import { BaseLayout } from '@instant1100/ui-kit';
import TimeTracerMenu from '$TimeTracer/menu/TimeTracerMenu';
import { BaseLayoutProps } from '@instant1100/ui-kit/src/layouts/interfaces';

const MainLayout: FC<BaseLayoutProps> = (props) => {
  return (
    <BaseLayout
      menu={<TimeTracerMenu />}

      {...props}
    />
  );
};

export default MainLayout;
