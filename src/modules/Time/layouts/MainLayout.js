import React from 'react';

import BaseLayout from '@/ui-kit/layouts/BaseLayout';
import TimeMenu from '$Time/menu/TimeMenu';

const MainLayout = (props) => {
  return (
    <BaseLayout
      {...props}
      menu={<TimeMenu />}
    />
  );
};

export default MainLayout;
