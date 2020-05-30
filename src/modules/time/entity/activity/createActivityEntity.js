const emptyActivity = {
  id: '',
  value: '',
  streams: [],
  date: Date.now(),
};

const createActivityEntity = (data = {}) => {
  return {
    ...emptyActivity,
    ...data,
  }
};

export default createActivityEntity;
