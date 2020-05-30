import React from 'react';

import BaseLayout from '@/ui-kit/layouts/BaseLayout';
import Grid from '@material-ui/core/Grid';
import DefaultFormPaper from '@/ui-kit/Forms/DefaultFormPaper';
import WordsForm from '@/modules/time/entity/word/components/WordsForm';
import WordsList from '@/modules/time/entity/word/components/WordsList';
import ActivitiesForm from '@/modules/time/entity/activity/components/ActivitiesForm';
import ActivitiesList from '@/modules/time/entity/activity/components/ActivitiesList';
import StreamsForm from '@/modules/time/entity/stream/components/StreamsForm';
import StreamsList from '@/modules/time/entity/stream/components/StreamsList';
import TagsForm from '@/modules/time/entity/tag/components/TagsForm';
import TagsList from '@/modules/time/entity/tag/components/TagsList';

const TimeTracerPage = () => {
  return (
    <BaseLayout>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <DefaultFormPaper>
            <WordsForm />
          </DefaultFormPaper>
        </Grid>
        <Grid item md={4}>
          <DefaultFormPaper>
            <WordsList />
          </DefaultFormPaper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <DefaultFormPaper>
            <ActivitiesForm />
          </DefaultFormPaper>
        </Grid>
        <Grid item md={4}>
          <DefaultFormPaper>
            <ActivitiesList />
          </DefaultFormPaper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <DefaultFormPaper>
            <StreamsForm />
          </DefaultFormPaper>
        </Grid>
        <Grid item md={4}>
          <DefaultFormPaper>
            <StreamsList />
          </DefaultFormPaper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <DefaultFormPaper>
            <TagsForm />
          </DefaultFormPaper>
        </Grid>
        <Grid item md={4}>
          <DefaultFormPaper>
            <TagsList />
          </DefaultFormPaper>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default TimeTracerPage;
