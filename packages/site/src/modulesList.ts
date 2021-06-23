import { FC } from 'react';

import { useAvailable as useAvailableTypingModule, TypingModule } from '@instant1100/typing';
import { useAvailable as useAvailableTimeModule, TimeModule } from '@instant1100/time';

type ModulesListItem = {
  key: string,
  path: string,
  component: FC,
  checkHook: () => boolean,
}

const modulesList: ModulesListItem[] = [
  {
    key: 'typing',
    path: '/typing',
    component: TypingModule,
    checkHook: useAvailableTypingModule,
  },
  {
    key: 'time',
    path: '/time',
    component: TimeModule,
    checkHook: useAvailableTimeModule,
  },
];

export default modulesList;
