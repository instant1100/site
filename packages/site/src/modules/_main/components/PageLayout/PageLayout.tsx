import React from 'react';
import BaseLayout from '@instant1100/ui-kit/src/layouts/BaseLayout';

import DefaultMenu from '../Menu/DefaultMenu';

const PageLayout = (props: any) => (
  <BaseLayout
    {...props}
    menu={<DefaultMenu />}
  />
);

export default PageLayout;
