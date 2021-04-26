import React, { FC } from 'react';

import BaseLayout from '@/ui-kit/layouts/BaseLayout';
import TimeMenu from '$Time/menu/TimeMenu';
import { BaseLayoutProps } from '/ui-kit/layouts/interfaces';

const MainLayout: FC<BaseLayoutProps> = (props) => {
  return (
    <BaseLayout
      {...props}
      menu={<TimeMenu />}
    />
  );
};

export default MainLayout;
