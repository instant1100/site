import axios, { Method } from 'axios';
import { EntityName } from './interfaces';

export const saveEntity = (entityName: EntityName, id: string, data: any) => {
  const form = new FormData();
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key].forEach((value: any) => {
        form.append(`${key}[]`, value);
      });
    } else {
      form.append(key, data[key]);
    }
  });

  let method: Method = 'put';
  let path = `${entityName}`;

  if (id) {
    method = 'post';
    path = `${entityName}/${id}`;
  }

  return axios({
    method,
    url: `http://localhost:8001/${path}`,
    data: form,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then(() => true);
};

export const deleteEntity = (entity: EntityName, id: string) => axios({
  method: 'delete',
  url: `http://localhost:8001/${entity}/${id}`,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
