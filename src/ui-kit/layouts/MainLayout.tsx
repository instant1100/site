import React, { FC } from 'react';
import BaseLayout from '@/ui-kit/layouts/BaseLayout';
import { BaseLayoutProps } from '/ui-kit/layouts/interfaces';

const MainLayout: FC<BaseLayoutProps> = (props) => (<BaseLayout {...props} />);

export default MainLayout;
