import getActivityTitle from '@/modules/time/entity/activity/getActivityTitle';
import createActivityEntity from '@/modules/time/entity/activity/createActivityEntity';

import getStreamTitle from '@/modules/time/entity/stream/getStreamTitle';
import createStreamEntity from '@/modules/time/entity/stream/createStreamEntity';
import getTagTitle from '@/modules/time/entity/tag/getTagTitle';
import getWordTitle from '@/modules/time/entity/word/getWordTitle';
import createTagEntity from '@/modules/time/entity/tag/createTagEntity';
import createWordEntity from '@/modules/time/entity/word/createWordEntity';

export const ACTIVITY_ENTITY = 'activities';
export const STREAM_ENTITY = 'streams';
export const TAG_ENTITY = 'tags';
export const WORD_ENTITY = 'words';

const entityMap = {
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
