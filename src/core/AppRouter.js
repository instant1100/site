import React, {Suspense} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from '@/pages/MainPage/MainPage';
import TypingPage from '@/pages/TypingPage/TypingPage';
import {Redirect} from 'react-router';
import modulesList from '@/core/modulesLoader/modulesList';
import CheckComponent from '@/core/features/CheckComponent';

const NoMatchPage = () => {
  return (
    <MainPage />
  );
};

const AppRouter = () => {
  const modules = modulesList.map(({path, component, checkHook}) => {
    const Component = React.lazy(component);
    console.log('modulesList');
    return (
        <Route path={path} key={path}>
          <CheckComponent check={checkHook}>
            <Suspense fallback={null}>
              <Component />
            </Suspense>
          </CheckComponent>
        </Route>
      )
    });

  return (
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <MainPage />
          </Route>
          <Route exact={true} path="/typing">
            <TypingPage />
          </Route>
          {modules}
          <Route exact={true} path="/404" component={NoMatchPage} />
        </Switch>
      </Router>

  )
};

export default AppRouter;