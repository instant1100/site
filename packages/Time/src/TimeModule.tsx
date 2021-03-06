import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

import getConfig from './configs/getConfig';
import MainLayout from './layouts/MainLayout';
import TimePage from './pages/TimePage';
import CurrentTimePage from './pages/CurrentTimePage';

const TimeModule = () => {
  const { url } = useRouteMatch();
  const config = getConfig();

  return (
    <MainLayout>
      <Switch>
        <Route exact path={`${url}`}>
          <TimePage />
        </Route>
        <Route exact path={`${url}/:key(${config.map(({ label }) => label).join('|')})`}>
          <CurrentTimePage />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </MainLayout>
  );
};

export default TimeModule;
