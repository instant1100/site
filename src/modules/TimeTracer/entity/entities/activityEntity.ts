import { FIELD_TYPES } from '/core/forms/interfaces/fields';
import { EntityConfig } from '/core/forms/interfaces/interfaces';

export type ActivityEntity = {
  id: string,
  name: string,
  size: number,
  tags: string[],
  icon: string,
}

export const activityEntityConfig: EntityConfig<ActivityEntity> = {
  fields: [
    {
      name: 'id',
      type: FIELD_TYPES.ID,
    },
    {
      type: FIELD_TYPES.TEXT,
      name: 'value',
      required: true,
      label: 'time_tracing/activity_value',
    },
    {
      type: FIELD_TYPES.SELECT,
      name: 'tags',
      values: [],
      label: 'time_tracing/choose_stream',
    },
  ],
  titles: {
    getEntityTitle: (entity: ActivityEntity) => entity.name,
    entitiesTitle: 'time_tracing/activit',
    edit: 'time_tracing/edit_activity',
    new: 'time_tracing/new_activity',
  },
};
