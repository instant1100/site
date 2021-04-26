import React from 'react';

import Grid from '@material-ui/core/Grid';
import DefaultFormPaper from '@/ui-kit/Forms/DefaultFormPaper';
import WordsForm from '@/modules/TimeTracer/entity/word/components/WordsForm';
import WordsList from '@/modules/TimeTracer/entity/word/components/WordsList';
import ActivitiesForm from '@/modules/TimeTracer/entity/activity/components/ActivitiesForm';
import ActivitiesList from '@/modules/TimeTracer/entity/activity/components/ActivitiesList';
import StreamsForm from '@/modules/TimeTracer/entity/stream/components/StreamsForm';
import StreamsList from '@/modules/TimeTracer/entity/stream/components/StreamsList';
import TagsForm from '@/modules/TimeTracer/entity/tag/components/TagsForm';
import TagsList from '@/modules/TimeTracer/entity/tag/components/TagsList';

const TimeTracerPage = () => (
  <>
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
  </>
);

export default TimeTracerPage;
