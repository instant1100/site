type MapType = {
  [key: string]: any,
}

// eslint-disable-next-line import/prefer-default-export
export const createMap = (key = 'id') => (map: MapType = {}, item: any) => {
  // eslint-disable-next-line no-param-reassign
  map[item[key] as string] = item;

  return map;
};
