import { useContext } from 'react';
import DBContext from '../../AppDB/DBContext';
import { EntityName } from '../../AppDB/interfaces';

const useDB = (entity: EntityName) => {
  const data = useContext(DBContext);

  return entity ? data[entity] || [] : data;
};

export default useDB;
