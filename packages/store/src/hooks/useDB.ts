import { useContext } from 'react';

import DBContext from '../core/DBContext';
import { AbstractEntity, EntityMap, EntityName } from '../core/interfaces';

const useDB = <T extends AbstractEntity>(entity: EntityName): T[] => {
  const data: EntityMap = useContext<EntityMap>(DBContext);

  return (data[entity] || []) as T[];
};

export default useDB;
