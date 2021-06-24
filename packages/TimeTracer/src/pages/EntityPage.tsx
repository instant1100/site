import React, { FC } from 'react';
import { useParams } from 'react-router';

import { Grid, DefaultFormPaper } from '@instant1100/ui-kit';

import EntityForm from '../entity/_common/EntityForm';
import EntityList from '../entity/_common/EntityList';

type EntityPageProps = {
  entity?: string,
}

const EntityPage: FC<EntityPageProps> = ({ entity: entityFromProps }) => {
  const { entity: entityFromURL } = useParams<{entity: string}>();
  const { id } = useParams<{id: string}>();
  const entityName: string = entityFromProps || entityFromURL;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <DefaultFormPaper>
            <EntityForm
              entityName={entityName}
              id={id}
            />
          </DefaultFormPaper>
        </Grid>
        <Grid item md={4}>
          <DefaultFormPaper>
            <EntityList entityName={entityName} />
          </DefaultFormPaper>
        </Grid>
      </Grid>
    </>
  );
};

EntityPage.defaultProps = {
  entity: null,
};

export default EntityPage;
