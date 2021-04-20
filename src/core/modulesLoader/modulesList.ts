import useTimeAvailable from '$Time/useAvailable';
import useTimeTracerAvailable from '$TimeTracer/useAvailable';
import useLessonsModule from '$Lessons/useAvailable';
import useTypingModule from '$Typing/useAvailable';
import useTehnologModule from '$Tehnolog/useAvailable';

const modulesList = [
  {
    key: 'time_tracer',
    path: '/time_tracer',
    component: () => import('../../modules/TimeTracer/TimeTracerModule'),
    checkHook: useTimeTracerAvailable,
  },
  {
    key: 'time',
    path: '/time',
    component: () => import('../../modules/Time/TimeModule'),
    checkHook: useTimeAvailable,
  },
  {
    key: 'lessons',
    path: '/lessons',
    component: () => import('../../modules/Lessons/LessonsModule'),
    checkHook: useLessonsModule,
  },
  {
    key: 'typing',
    path: '/typing',
    component: () => import('../../modules/Typing/TypingModule'),
    checkHook: useTypingModule,
  },
  {
    key: 'tehnolog',
    path: '/tehnolog',
    component: () => import('../../modules/Tehnolog/TehnologModule'),
    checkHook: useTehnologModule,
  },
];

export default modulesList;
