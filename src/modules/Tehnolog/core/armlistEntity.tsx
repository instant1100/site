import { FIELD_TYPES } from '/core/forms/interfaces';

const armlistEntity = [
  {
    name: 'id',
    type: FIELD_TYPES.ID,
  },
  {
    name: 'name',
    type: FIELD_TYPES.TEXT,
  },
  {
    name: 'status',
    type: FIELD_TYPES.SELECT,
    values: ['Куплен', 'В процессе', 'не найден'],
  },
  {
    name: 'image',
    type: FIELD_TYPES.IMAGE,
  },
];

export default armlistEntity;
