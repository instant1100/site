import { FC } from 'react';

import { useAvailable, TypingModule } from '@instant1100/typing';

type LazyComponent = () => Promise<any>;

type ModulesListItem = {
  key: string,
  path: string,
  component: FC | LazyComponent,
  checkHook: () => boolean,
}

const modulesList: ModulesListItem[] = [
  {
    key: 'typing',
    path: '/typing',
    component: TypingModule,
    checkHook: useAvailable,
  },
];

export default modulesList;
