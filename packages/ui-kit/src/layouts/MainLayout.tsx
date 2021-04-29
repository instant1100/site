import React, { FC } from 'react';

import BaseLayout from './BaseLayout';
import { BaseLayoutProps } from './interfaces';

const MainLayout: FC<BaseLayoutProps> = (props) => (<BaseLayout {...props} />);

export default MainLayout;
