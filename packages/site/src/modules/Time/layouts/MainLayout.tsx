import React, { FC } from 'react';

import { BaseLayout } from '@instant1100/ui-kit';
import { BaseLayoutProps } from '@instant1100/ui-kit/src/layouts/interfaces';

import TimeMenu from '$Time/menu/TimeMenu';

const MainLayout: FC<BaseLayoutProps> = (props) => {
  return (
    <BaseLayout
      {...props}
      menu={<TimeMenu />}
    />
  );
};

export default MainLayout;
