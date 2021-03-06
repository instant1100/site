import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

import PageLayout from '../_main/components/PageLayout/PageLayout';
import TehnologPage from './pages/TehnologPage';

const TehnologModule = () => {
  const { url } = useRouteMatch();

  return (
    <PageLayout>
      <Switch>
        <Route exact path={`${url}`}>
          <TehnologPage />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </PageLayout>
  );
};

export default TehnologModule;
