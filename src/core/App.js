import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import MainPage from '@/pages/MainPage/MainPage';
import TypingPage from '@/pages/TypingPage/TypingPage';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <MainPage />
          </Route>

          <Route exact={true} path="/typing">
            <TypingPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
};

export default App;