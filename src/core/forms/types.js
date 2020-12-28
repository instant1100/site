export const FIELD_ID = 'FIELD_ID';
export const FIELD_TEXT = 'FIELD_TEXT';
export const FIELD_SELECT = 'FIELD_SELECT';
export const FIELD_IMAGE = 'FIELD_IMAGE';

export const getDefaultEntity = (config) => {
  const map = {
    [FIELD_ID]: null,
    [FIELD_TEXT]: '',
    [FIELD_SELECT]: [],
    [FIELD_IMAGE]: null,
  };

  return config.reduce((old, item) => {
    // eslint-disable-next-line no-param-reassign
    old[item.name] = map[item.type];

    return old;
  }, {});
};
