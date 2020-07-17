import useTimeTracerAvailable from '$TimeTracer/useAvailable';
import useLessonsModule from '$Lessons/useAvailable';
import useTypingModule from '$Typing/useAvailable';

const modulesList = [
  {
    key: 'time_tracer',
    path: '/time_tracer',
    component: () => import('../../modules/TimeTracer/TimeTracerModule'),
    checkHook: useTimeTracerAvailable,
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
];

export default modulesList;
