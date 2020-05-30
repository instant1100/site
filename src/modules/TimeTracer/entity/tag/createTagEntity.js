const emptyTag = {
  id: '',
  name: '',
};

const createTagEntity = (data = {}) => {
  return {
    ...emptyTag,
    ...data,
  }
};

export default createTagEntity;
