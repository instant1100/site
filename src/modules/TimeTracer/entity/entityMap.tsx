import getActivityTitle from '@/modules/TimeTracer/entity/activity/getActivityTitle';
import createActivityEntity from '@/modules/TimeTracer/entity/activity/createActivityEntity';

import getStreamTitle from '@/modules/TimeTracer/entity/stream/getStreamTitle';
import createStreamEntity from '@/modules/TimeTracer/entity/stream/createStreamEntity';
import getTagTitle from '@/modules/TimeTracer/entity/tag/getTagTitle';
import getWordTitle from '@/modules/TimeTracer/entity/word/getWordTitle';
import createTagEntity from '@/modules/TimeTracer/entity/tag/createTagEntity';
import createWordEntity from '@/modules/TimeTracer/entity/word/createWordEntity';
import { Activity } from '$TimeTracer/entity/interfaces';
import { TFunction } from 'react-i18next';
import { AbstractEntity } from '/core/AppDB/interfaces';

export const ACTIVITY_ENTITY = 'activities';
export const STREAM_ENTITY = 'streams';
export const TAG_ENTITY = 'tags';
export const WORD_ENTITY = 'words';

export const allEntities = [
  ACTIVITY_ENTITY,
  STREAM_ENTITY,
  TAG_ENTITY,
  WORD_ENTITY,
];
type entityConfig<T extends AbstractEntity> = {
  getTitle: (entity: T, t: TFunction) => string,
  createEntity: (data: T) => T,
}

const entityMap: {[key: string]: entityConfig<any>} = {
  [ACTIVITY_ENTITY]: {
    getTitle: getActivityTitle,
    createEntity: createActivityEntity,
  },
  [STREAM_ENTITY]: {
    getTitle: getStreamTitle,
    createEntity: createStreamEntity,
  },
  [TAG_ENTITY]: {
    getTitle: getTagTitle,
    createEntity: createTagEntity,
  },
  [WORD_ENTITY]: {
    getTitle: getWordTitle,
    createEntity: createWordEntity,
  },
};

export default entityMap;
