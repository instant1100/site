import { FIELD_TYPES } from '@instant1100/forms';
import { EntityConfig } from '@instant1100/forms';

export type WordEntity = {
  id: string,
  word: string,
  translate: string
}

export const wordEntityConfig: EntityConfig<WordEntity> = {
  fields: [
    {
      name: 'id',
      type: FIELD_TYPES.ID,
    },
    {
      type: FIELD_TYPES.TEXT,
      name: 'word',
      required: true,
      label: 'time_tracing/word',
    },
    {
      type: FIELD_TYPES.TEXT,
      name: 'translate',
      required: true,
      label: 'time_tracing/translate',
    },
  ],
  titles: {
    getEntityTitle: (word: WordEntity) => word.word,
    entitiesTitle: 'time_tracing/words',
    edit: 'time_tracing/edit_word',
    new: 'time_tracing/new_word',
  },
};
