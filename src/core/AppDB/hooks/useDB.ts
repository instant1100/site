import { useContext } from 'react';

import DBContext from '/core/AppDB/DBContext';
import { AbstractEntity, EntityMap, EntityName } from '/core/AppDB/interfaces';

const useDB = <T extends AbstractEntity>(entity: EntityName): T[] => {
  const data: EntityMap = useContext<EntityMap>(DBContext);

  return (data[entity] || []) as T[];
};

export default useDB;
