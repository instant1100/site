import { useContext } from 'react';
import DBContext from '@/core/AppDB/DBContext';

const useDB = (entity) => {
  const data = useContext(DBContext);

  return entity ? data[entity] || [] : data;
};

export default useDB;
