import { TFunction } from 'react-i18next';
import { Activity } from '$TimeTracer/entity/interfaces';

const getActivityTitle = (activity: Activity, t: TFunction): string => {
  return t('time_tracing/spend', { value: activity.value });
};

export default getActivityTitle;
