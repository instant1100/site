import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import TypingPage from '$Typing/pages/TypingPage';
import BaseLayout from '@/ui-kit/layouts/BaseLayout';

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
