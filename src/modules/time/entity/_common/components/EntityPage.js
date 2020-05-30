import React from 'react';

import BaseLayout from '@/ui-kit/layouts/BaseLayout';
import DefaultFormPaper from '@/ui-kit/Forms/DefaultFormPaper';
import Grid from '@material-ui/core/Grid';
import {ACTIVITY_ENTITY, STREAM_ENTITY, TAG_ENTITY, WORD_ENTITY} from '@/modules/time/entity/entityMap';
import {useParams} from 'react-router';
import WordsForm from '@/modules/time/entity/word/components/WordsForm';
import WordsList from '@/modules/time/entity/word/components/WordsList';
import StreamsForm from '@/modules/time/entity/stream/components/StreamsForm';
import ActivitiesForm from '@/modules/time/entity/activity/components/ActivitiesForm';
import TagsForm from '@/modules/time/entity/tag/components/TagsForm';
import ActivitiesList from '@/modules/time/entity/activity/components/ActivitiesList';
import StreamsList from '@/modules/time/entity/stream/components/StreamsList';
import TagsList from '@/modules/time/entity/tag/components/TagsList';
import PropTypes from 'prop-types';

const componentMap = {
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

const EntityPage = ({entity: entityFromProps}) => {
  const { entity: entityFromURL } = useParams();
  const entity = entityFromProps || entityFromURL;

  const FormComponent = componentMap[entity].form;
  const ListComponent = componentMap[entity].list;

  return (
    <BaseLayout>
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
    </BaseLayout>
  );
};

EntityPage.propTypes = {
  entity: PropTypes.oneOf([WORD_ENTITY, TAG_ENTITY, ACTIVITY_ENTITY, STREAM_ENTITY]),
};

export default EntityPage;
