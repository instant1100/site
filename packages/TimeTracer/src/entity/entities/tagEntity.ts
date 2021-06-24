import { FIELD_TYPES } from '@instant1100/forms';
import { EntityConfig } from '@instant1100/forms';

export type TagEntity = {
  id: string,
  name: string,
}

export const tagEntityConfig: EntityConfig<TagEntity> = {
  fields: [
    {
      name: 'id',
      type: FIELD_TYPES.ID,
    },
    {
      type: FIELD_TYPES.TEXT,
      name: 'name',
      required: true,
      label: 'time_tracing/tag_name',
    },
  ],
  titles: {
    getEntityTitle: (word: TagEntity) => word.name,
    entitiesTitle: 'time_tracing/tags',
    edit: 'time_tracing/edit_tag',
    new: 'time_tracing/new_tag',
  },
};
