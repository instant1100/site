import {
  FIELD_ID, FIELD_IMAGE, FIELD_SELECT, FIELD_TEXT,
} from '@/core/forms/types';

const armlistEntity = [
  {
    name: 'id',
    type: FIELD_ID,
  },
  {
    name: 'name',
    type: FIELD_TEXT,
  },
  {
    name: 'status',
    type: FIELD_SELECT,
    values: ['Куплен', 'В процессе', 'не найден'],
  },
  {
    name: 'image',
    type: FIELD_IMAGE,
  },
];

export default armlistEntity;
