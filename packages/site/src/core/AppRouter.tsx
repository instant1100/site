import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '$_main/pages/MainPage/MainPage';
import CheckComponent from './features/CheckComponent';
import modulesList from '../modulesList';

const NoMatchPage = () => (
  <MainPage />
);

const AppRouter = () => {
  const modules = modulesList.map(({ path, component, checkHook }) => {
    // @ts-ignore
    const Component = component;

    return (
      <Route path={path} key={path}>
        <CheckComponent check={checkHook}>
          <Suspense fallback={null}>
            <Component />
          </Suspense>
        </CheckComponent>
      </Route>
    );
  });

  return (
    <Router>
      <Switch>
        {modules}
        <Route exact path="/" component={MainPage} />
        <Route exact path="/404" component={NoMatchPage} />
      </Switch>
    </Router>

  );
};

export default AppRouter;
