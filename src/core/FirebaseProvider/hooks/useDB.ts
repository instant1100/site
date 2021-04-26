import { useContext } from 'react';
import DBContext from '/core/AppDB/DBContext';
import { EntityName } from '/core/AppDB/interfaces';

const useDB = (entity: EntityName) => {
  const data = useContext(DBContext);

  return entity ? data[entity] || [] : data;
};

export default useDB;
