import React, {FC} from 'react';

import DefaultFormPaper from '@/ui-kit/Forms/DefaultFormPaper';
import Grid from '@material-ui/core/Grid';
import {
  ACTIVITY_ENTITY, STREAM_ENTITY, TAG_ENTITY, WORD_ENTITY,
} from '@/modules/TimeTracer/entity/entityMap';
import { useParams } from 'react-router';
import WordsForm from '@/modules/TimeTracer/entity/word/components/WordsForm';
import WordsList from '@/modules/TimeTracer/entity/word/components/WordsList';
import StreamsForm from '@/modules/TimeTracer/entity/stream/components/StreamsForm';
import ActivitiesForm from '@/modules/TimeTracer/entity/activity/components/ActivitiesForm';
import TagsForm from '@/modules/TimeTracer/entity/tag/components/TagsForm';
import ActivitiesList from '@/modules/TimeTracer/entity/activity/components/ActivitiesList';
import StreamsList from '@/modules/TimeTracer/entity/stream/components/StreamsList';
import TagsList from '@/modules/TimeTracer/entity/tag/components/TagsList';
import PropTypes from 'prop-types';

const componentMap: {[key: string]: any} = {
  [WORD_ENTITY]: {
    form: WordsForm,
    list: WordsList,
  },
  [TAG_ENTITY]: {
    form: TagsForm,
    list: TagsList,
  },
  [ACTIVITY_ENTITY]: {
    form: ActivitiesForm,
    list: ActivitiesList,
  },
  [STREAM_ENTITY]: {
    form: StreamsForm,
    list: StreamsList,
  },
};
type EntityPageProps = {
  entity?: string,
}

const EntityPage: FC<EntityPageProps> = ({ entity: entityFromProps }) => {
  const { entity: entityFromURL } = useParams<{entity: string}>();
  const entity: string = entityFromProps || entityFromURL;

  const FormComponent = componentMap[entity].form;
  const ListComponent = componentMap[entity].list;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <DefaultFormPaper>
            <FormComponent />
          </DefaultFormPaper>
        </Grid>
        <Grid item md={4}>
          <DefaultFormPaper>
            <ListComponent />
          </DefaultFormPaper>
        </Grid>
      </Grid>
    </>
  );
};

EntityPage.defaultProps = {
  entity: null,
};

EntityPage.propTypes = {
  entity: PropTypes.oneOf([WORD_ENTITY, TAG_ENTITY, ACTIVITY_ENTITY, STREAM_ENTITY]),
};

export default EntityPage;