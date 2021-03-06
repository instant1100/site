import { AbstractEntity } from '@instant1100/store';

import { EntityConfig, ValueMap } from './interfaces/interfaces';
import { FIELD_TYPES } from './interfaces/fields';

const map: ValueMap = {
  [FIELD_TYPES.ID]: null,
  [FIELD_TYPES.TEXT]: '',
  [FIELD_TYPES.SELECT]: [],
  [FIELD_TYPES.IMAGE]: null,
};

export const getDefaultEntity = (config: EntityConfig<AbstractEntity>) => {
  return config.fields.reduce((old: ValueMap, item) => {
    // eslint-disable-next-line no-param-reassign
    old[item.name] = map[item.type];

    return old;
  }, {});
};
