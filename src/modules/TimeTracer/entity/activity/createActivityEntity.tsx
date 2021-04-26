import { Activity } from '$TimeTracer/entity/interfaces';

const emptyActivity: Activity = {
  id: '',
  value: '',
  streams: [],
  date: Date.now(),
};

const createActivityEntity = (data = {}) => ({
  ...emptyActivity,
  ...data,
});

export default createActivityEntity;
