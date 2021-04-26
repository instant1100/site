const emptyWord = {
  id: '',
  translate: '',
  word: '',
};

const createWordEntity = (data = {}) => ({
  ...emptyWord,
  ...data,
});

export default createWordEntity;
