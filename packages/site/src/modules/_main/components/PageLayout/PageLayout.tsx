import React from 'react';
import { BaseLayout } from '@instant1100/ui-kit';

import DefaultMenu from '../Menu/DefaultMenu';
import HeaderDefault from '$_main/components/Header/HeaderDefault';

const PageLayout = (props: any) => (
  <BaseLayout
    {...props}
    menu={<DefaultMenu />}
    header={<HeaderDefault title="step by step" />}
  />
);

export default PageLayout;
