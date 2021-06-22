import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BaseLayout } from '@instant1100/ui-kit';

import { useRouteMatch } from 'react-router';
import TypingPage from './pages/TypingPage';

const TypingModule = () => {
  const { url } = useRouteMatch();

  return (
    <BaseLayout>
      <Switch>
        <Route exact path={`${url}`}>
          <TypingPage />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </BaseLayout>
  );
};

export default TypingModule;
