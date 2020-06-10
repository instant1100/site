const emptyStream = {
  id: '',
  name: '',
  tags: [],
  size: 0,
  image: null,
};

const createStreamEntity = (data = {}) => ({
  ...emptyStream,
  ...data,
});

export default createStreamEntity;
