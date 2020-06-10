const emptyActivity = {
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
