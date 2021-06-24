import { AbstractEntity } from '@instant1100/store';

import { EntityConfig } from '@instant1100/forms';

import { wordEntityConfig } from './entities/wordEntity';
import { activityEntityConfig } from './entities/activityEntity';
import { streamEntityConfig } from './entities/streamEntity';
import { tagEntityConfig } from './entities/tagEntity';

export enum ENTITIES_LIST {
  ACTIVITY = 'activities',
  STREAM = 'streams',
  TAG = 'tags',
  WORD = 'words',
}

type EntityMapConfigs = {
  [key in string]: EntityConfig<AbstractEntity>
}

export const allEntities = [
  ENTITIES_LIST.ACTIVITY, ENTITIES_LIST.STREAM, ENTITIES_LIST.TAG, ENTITIES_LIST.WORD,
];

const entityMap: EntityMapConfigs = {
  [ENTITIES_LIST.ACTIVITY]: activityEntityConfig,
  [ENTITIES_LIST.STREAM]: streamEntityConfig,
  [ENTITIES_LIST.TAG]: tagEntityConfig,
  [ENTITIES_LIST.WORD]: wordEntityConfig,
};

export default entityMap;
