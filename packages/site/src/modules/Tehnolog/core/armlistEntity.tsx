import { FIELD_TYPES, EntityConfig } from '@instant1100/forms';

export type ArmlistEntity = {
  id: string,
  name: string,
  status: string
  image: string
}

const armlistEntityConfig: EntityConfig<ArmlistEntity> = {
  fields: [
    {
      name: 'id',
      type: FIELD_TYPES.ID,
    },
    {
      name: 'name',
      type: FIELD_TYPES.TEXT,
      label: 'fix',
    },
    {
      name: 'status',
      type: FIELD_TYPES.SELECT,
      values: ['Куплен', 'В процессе', 'не найден'],
      label: 'fix',
    },
    {
      name: 'image',
      type: FIELD_TYPES.IMAGE,
      label: 'fix',
    },
  ],
  titles: {
    getEntityTitle: (word: ArmlistEntity) => word.name,
    entitiesTitle: 'fix',
    edit: 'fix',
    new: 'fix',
  },
};

export default armlistEntityConfig;
