export enum FIELD_TYPES {
  ID = 'FIELD_ID',
  TEXT = 'FIELD_TEXT',
  SELECT = 'FIELD_SELECT',
  IMAGE = 'FIELD_IMAGE',
}

export const getDefaultEntity = (config) => {
  const map = {
    [FIELD_TYPES.ID]: null,
    [FIELD_TYPES.TEXT]: '',
    [FIELD_TYPES.SELECT]: [],
    [FIELD_TYPES.IMAGE]: null,
  };

  return config.reduce((old, item) => {
    // eslint-disable-next-line no-param-reassign
    old[item.name] = map[item.type];

    return old;
  }, {});
};


