const emptyStream = {
  id: '',
  name: '',
  tags: [],
  size: 0,
  image: null,
};

const createStreamEntity = (data = {}) => {
  return {
    ...emptyStream,
    ...data,
  }
};

export default createStreamEntity;
