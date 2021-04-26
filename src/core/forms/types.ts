import { EntityConfig, FIELD_TYPES, ValueMap } from '/core/forms/interfaces';

const map: ValueMap = {
  [FIELD_TYPES.ID]: null,
  [FIELD_TYPES.TEXT]: '',
  [FIELD_TYPES.SELECT]: [],
  [FIELD_TYPES.IMAGE]: null,
};

export const getDefaultEntity = (config: EntityConfig[]) => {
  return config.reduce((old: ValueMap, item) => {
    // eslint-disable-next-line no-param-reassign
    old[item.name] = map[item.type];

    return old;
  }, {});
};
