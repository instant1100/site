const emptyTag = {
  id: '',
  name: '',
};

const createTagEntity = (data = {}) => ({
  ...emptyTag,
  ...data,
});

export default createTagEntity;
