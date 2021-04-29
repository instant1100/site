import React, { FC } from 'react';

import entityMap from '../entityMap';
import Form from '../../../../core/forms/components/Form';
import DefaultFormView from '../../../../core/forms/components/DefaultFormView/DefaultFormView';

const handleSubmit = async (e: any): Promise<boolean> => {
  console.log(e);

  return true;
};

type EntityFormProps = {
  entityName: string,
  id?: string
}

const EntityForm: FC<EntityFormProps> = ({ entityName, id }) => {
  // @ts-ignore
  const entityConfig = entityMap[entityName];
  // const currentWordEntity = useSafeEntity(ENTITIES_LIST.WORD, id);

  //  const submit = useCallback((values) => saveEntity(ENTITIES_LIST.WORD, id, values), [id]);

  return (
    <Form
      entityConfig={entityConfig}
      handleSubmit={handleSubmit}

      ViewComponent={DefaultFormView}
    />
  );
};

export default EntityForm;
