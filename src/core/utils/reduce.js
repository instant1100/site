// eslint-disable-next-line import/prefer-default-export
export const createMap = (key = 'id') => (map = {}, item) => {
  // eslint-disable-next-line no-param-reassign
  map[item[key]] = item;

  return map;
};
