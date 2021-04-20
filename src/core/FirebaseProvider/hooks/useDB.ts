import { useContext } from 'react';
import DBContext from '/core/AppDB/DBContext';
import { entityNameType } from '/core/AppDB/interfaces';

const useDB = (entity: entityNameType) => {
  const data = useContext(DBContext);

  return entity ? data[entity] || [] : data;
};

export default useDB;
