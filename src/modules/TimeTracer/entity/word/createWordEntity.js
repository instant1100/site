const emptyWord = {
  id: '',
  translate: '',
  word: '',
};

const createWordEntity = (data = {}) => {
  return {
    ...emptyWord,
    ...data,
  }
};

export default createWordEntity;
