import React, { FC } from 'react';

import { BaseLayout } from '@instant1100/ui-kit';
import { BaseLayoutProps } from '@instant1100/ui-kit';

import TimeTracerMenu from '../menu/TimeTracerMenu';

const MainLayout: FC<BaseLayoutProps> = (props) => {
  return (
    <BaseLayout
      menu={<TimeTracerMenu />}

      {...props}
    />
  );
};

export default MainLayout;
