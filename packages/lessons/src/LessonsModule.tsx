import React from 'react';
import { useRouteMatch } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import MainLessonsPage from './pages/MainLessonsPage';

const LessonsModule = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${url}`}>
        <MainLessonsPage />
      </Route>

    </Switch>
  );
};

export default LessonsModule;
