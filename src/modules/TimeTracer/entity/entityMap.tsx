import { AbstractEntity } from '/core/AppDB/interfaces';
import { EntityConfig } from '/core/forms/interfaces/interfaces';
import { wordEntityConfig } from '$TimeTracer/entity/entities/wordEntity';
import { activityEntityConfig } from '$TimeTracer/entity/entities/activityEntity';
import { streamEntityConfig } from '$TimeTracer/entity/entities/streamEntity';
import { tagEntityConfig } from '$TimeTracer/entity/entities/tagEntity';

export enum ENTITIES_LIST {
  ACTIVITY = 'activities',
  STREAM = 'streams',
  TAG = 'tags',
  WORD = 'words',
}

type EntityMapConfigs = {
  [key in string]: EntityConfig<AbstractEntity>
}

const entityMap: EntityMapConfigs = {
  [ENTITIES_LIST.ACTIVITY]: activityEntityConfig,
  [ENTITIES_LIST.STREAM]: streamEntityConfig,
  [ENTITIES_LIST.TAG]: tagEntityConfig,
  [ENTITIES_LIST.WORD]: wordEntityConfig,
};

export default entityMap;
