import React from 'react';
import BaseLayout from '@/ui-kit/layouts/BaseLayout';
import DefaultMenu from '@/modules/_main/components/Menu/DefaultMenu';

const PageLayout = (props: any) => (
  <BaseLayout
    {...props}
    menu={<DefaultMenu />}
  />
);

export default PageLayout;
