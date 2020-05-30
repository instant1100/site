const getActivityTitle = (activity, t) => {
  return t('time_tracing/spend', {value: activity.value});
};

export default getActivityTitle;
