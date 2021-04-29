import useTimeAvailable from './modules/Time/useAvailable';
import useTimeTracerAvailable from './modules/TimeTracer/useAvailable';
import { useLessonsModule, LessonsModule } from '@instant1100/lessons';
import useTypingModule from './modules/Typing/useAvailable';
import useTehnologModule from './modules/Tehnolog/useAvailable';

const modulesList = [
  {
    key: 'time_tracer',
    path: '/time_tracer',
    component: () => import('./modules/TimeTracer/TimeTracerModule'),
    checkHook: useTimeTracerAvailable,
  },
  {
    key: 'time',
    path: '/time',
    component: () => import('./modules/Time/TimeModule'),
    checkHook: useTimeAvailable,
  },
  {
    key: 'lessons',
    path: '/lessons',
    component: LessonsModule,
    checkHook: useLessonsModule,
  },
  {
    key: 'typing',
    path: '/typing',
    component: () => import('./modules/Typing/TypingModule'),
    checkHook: useTypingModule,
  },
  {
    key: 'tehnolog',
    path: '/tehnolog',
    component: () => import('./modules/Tehnolog/TehnologModule'),
    checkHook: useTehnologModule,
  },
];

export default modulesList;
