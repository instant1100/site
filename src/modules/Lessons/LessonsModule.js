import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import MainLessonsPage from '$Lessons/pages/MainLessonsPage';

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
