import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ACTIVITY_ENTITY, STREAM_ENTITY, TAG_ENTITY, WORD_ENTITY} from '@/modules/TimeTracer/entity/entityMap';
import EntityPage from '@/modules/TimeTracer/entity/_common/components/EntityPage';
import TimeTracerPage from '@/modules/TimeTracer/pages/TimeTracerPage';

const TimeTracerRouter = () => {
  console.log('TimeTracerRouter');
  return (
    <Switch>
      <Route exact={true} path="/">
        <TimeTracerPage />
      </Route>
      <Route exact={true} path={`/:entity(${WORD_ENTITY}|${ACTIVITY_ENTITY}|${TAG_ENTITY}|${STREAM_ENTITY})/:id`}>
        <EntityPage />
      </Route>
    </Switch>
  )
};

export default TimeTracerRouter;
