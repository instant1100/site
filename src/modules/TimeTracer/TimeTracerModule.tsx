import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

import TimeTracerPage from '$TimeTracer/pages/TimeTracerPage';
import { allEntities } from '$TimeTracer/entity/entityMap';
import MainLayout from '$TimeTracer/layouts/MainLayout';
import StreamWatchPage from '$TimeTracer/pages/StreamWatchPage';
import EntityPage from '$TimeTracer/entity/_common/components/EntityPage';

const TimeTracerModule = () => {
  const { url } = useRouteMatch();

  return (
    <MainLayout>
      <Switch>
        <Route exact path={`${url}`}>
          <TimeTracerPage />
        </Route>
        <Route exact path={`${url}/stream_watch`}>
          <StreamWatchPage />
        </Route>
        <Route exact path={`${url}/:entity(${allEntities.join('|')})/:id`}>
          <EntityPage />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </MainLayout>
  );
};

export default TimeTracerModule;
