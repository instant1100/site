import { useContext } from 'react';
import DBContext from '/core/AppDB/DBContext';
import { entityMap, entityName } from '/core/AppDB/interfaces';

const useDB = (entity: entityName) => {
  const data = useContext<entityMap>(DBContext);

  return entity ? data[entity] || [] : data;
};

export default useDB;
