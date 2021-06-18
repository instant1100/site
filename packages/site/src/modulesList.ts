import { FC } from 'react';

import useTimeAvailable from './modules/Time/useAvailable';
import useTimeTracerAvailable from './modules/TimeTracer/useAvailable';
import useTypingModule from './modules/Typing/useAvailable';
import useTehnologModule from './modules/Tehnolog/useAvailable';

type LazyComponent = () => Promise<any>;

type ModulesListItem = {
  key: string,
  path: string,
  component: FC | LazyComponent,
  checkHook: () => boolean,
}

const modulesList: ModulesListItem[] = [

];

export default modulesList;
