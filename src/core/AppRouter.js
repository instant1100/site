import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '@/modules/_main/pages/MainPage/MainPage';
import modulesList from '@/core/modulesLoader/modulesList';
import CheckComponent from '@/core/features/CheckComponent';

const NoMatchPage = () => (
  <MainPage />
);

const AppRouter = () => {
  const modules = modulesList.map(({ path, component, checkHook }) => {
    const Component = React.lazy(component);

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
        <Route exact path="/">
          <MainPage />
        </Route>
        {modules}
        <Route exact path="/404" component={NoMatchPage} />
      </Switch>
    </Router>

  );
};

export default AppRouter;
