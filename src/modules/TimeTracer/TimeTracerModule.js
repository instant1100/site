import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import TimeTracerPage from '$TimeTracer/pages/TimeTracerPage';
import EntityPage from '$TimeTracer/entity/_common/components/EntityPage';
import { allEntities } from '$TimeTracer/entity/entityMap';

const TimeTracerModule = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${url}`}>
        <TimeTracerPage />
      </Route>
      <Route exact path={`${url}/:entity(${allEntities.join('|')})/:id`}>
        <EntityPage />
      </Route>
    </Switch>
  );
};

export default TimeTracerModule;
