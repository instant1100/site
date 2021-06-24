import { FIELD_TYPES } from '@instant1100/forms';
import { EntityConfig } from '@instant1100/forms';

export type StreamEntity = {
  id: string,
  name: string,
  size: number,
  tags: string[],
  icon: string,
}

export const streamEntityConfig: EntityConfig<StreamEntity> = {
  fields: [
    {
      name: 'id',
      type: FIELD_TYPES.ID,
    },
    {
      type: FIELD_TYPES.TEXT,
      name: 'name',
      required: true,
      label: 'time_tracing/stream_name',
    },
    {
      type: FIELD_TYPES.TEXT,
      name: 'size',
      required: false,
      label: 'time_tracing/stream_size',
    },
    {
      type: FIELD_TYPES.SELECT,
      name: 'tags',
      values: [],
      label: 'time_tracing/choose_tag',
    },
    {
      type: FIELD_TYPES.IMAGE,
      name: 'icon',
      required: false,
      label: 'fix',
    },
  ],
  titles: {
    getEntityTitle: (entity: StreamEntity) => entity.name,
    entitiesTitle: 'time_tracing/streams',
    edit: 'time_tracing/edit_stream',
    new: 'time_tracing/new_stream',
  },
};
