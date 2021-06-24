import { EntityName, useDB } from '@instant1100/store';
import { byId } from '@instant1100/core';
import { FIELD_TYPES } from '@instant1100/forms';

import entityMap from '../entityMap';

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
