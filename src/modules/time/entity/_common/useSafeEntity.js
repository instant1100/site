import {useDB} from '@/core/DBContext';
import byId from '@/utils/byId';
import entityMap from '@/modules/time/entity/entityMap';

const useSafeEntity = (entity, id) => {
  const list = useDB(entity);
  const entityFromDB = list.find(byId(id));

  return entityMap[entity].createEntity(entityFromDB);
};

export default useSafeEntity;