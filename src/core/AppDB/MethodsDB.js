import axios from 'axios';

export const saveEntity = (entity, id, data) => {
  const form = new FormData();
  for (let key in data) {
    if (Array.isArray(data[key])) {
      data[key].forEach(value => {
        form.append(key + '[]', value);
      });
    } else {
      form.append(key, data[key]);
    }
  }

  let method = 'put';
  let path = `${entity}`;

  if (id) {
    method = 'post';
    path = `${entity}/${id}`;
  }

  return axios({
    method: method,
    url: `http://localhost:8001/${path}`,
    data: form,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => {
    console.log(res.statusText)
  })
};

export const deleteEntity = (entity, id) => {
  return axios({
    method: 'delete',
    url: `http://localhost:8001/${entity}/${id}`,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => {
    console.log(res.statusText)
  })
};
