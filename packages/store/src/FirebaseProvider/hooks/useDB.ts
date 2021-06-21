import { useContext } from 'react';
import DBContext from '../../core/DBContext';
import { EntityName } from '../../core/interfaces';

const useDB = (entity: EntityName) => {
  const data = useContext(DBContext);

  return entity ? data[entity] || [] : data;
};

export default useDB;
