import React, { FC } from 'react';

import { Grid } from '@instant1100/ui-kit';
import DefaultFormPaper from '@instant1100/ui-kit/src/Forms/DefaultFormPaper';

import EntityForm from '../entity/_common/EntityForm';
import { ENTITIES_LIST } from '../entity/entityMap';
import EntityList from '../entity/_common/EntityList';

const entities = [
  ENTITIES_LIST.WORD,
  ENTITIES_LIST.ACTIVITY,
  ENTITIES_LIST.STREAM,
  ENTITIES_LIST.TAG,
];

const TimeTracerPage: FC = () => {
  return (
    <>
      {entities.map((entityName) => (
        <Grid container spacing={3}>
          <Grid item md={4}>
            <DefaultFormPaper>
              <EntityForm
                entityName={entityName}
              />
            </DefaultFormPaper>
          </Grid>
          <Grid item md={4}>
            <DefaultFormPaper>
              <EntityList entityName={entityName} />
            </DefaultFormPaper>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default TimeTracerPage;
