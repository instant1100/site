import byId from '../../../../utils/byId';
import entityMap from '../entityMap';
import useDB from '../../../../core/AppDB/hooks/useDB';
import { EntityName } from '../../../../core/AppDB/interfaces';
import { FIELD_TYPES } from '../../../../core/forms/interfaces/fields';

type MapOfDefaultValues = {
  [key in FIELD_TYPES]: any;
}

const mapOfDefaultValues: MapOfDefaultValues = {
  [FIELD_TYPES.ID]: null,
  [FIELD_TYPES.TEXT]: '',
  [FIELD_TYPES.SELECT]: [],
  [FIELD_TYPES.IMAGE]: '',
};

const useSafeEntity = (entity: EntityName, id: string): any => {
  const list = useDB(entity);
  const entityFromDB = list.find(byId(id));
  const defaultValues = entityMap[entity].fields.reduce((acc, field) => ({
    ...acc,
    [field.name]: mapOfDefaultValues[field.type],
  }), {});

  return ({
    ...defaultValues,
    ...entityFromDB,
  });
};

export default useSafeEntity;
