import byId from '@/utils/byId';
import entityMap from '@/modules/TimeTracer/entity/entityMap';
import useDB from '/core/AppDB/hooks/useDB';
import { EntityName } from '/core/AppDB/interfaces';

const useSafeEntity = (entity: EntityName, id: string): any => {
  const list = useDB(entity);
  const entityFromDB = list.find(byId(id));

  return entityMap[entity].createEntity(entityFromDB);
};

export default useSafeEntity;
