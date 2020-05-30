import React, {useEffect, useState} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import MainPage from '@/pages/MainPage/MainPage';
import TypingPage from '@/pages/TypingPage/TypingPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import DBContext from '@/core/DBContext'
import TimeTracerPage from '@/modules/time/pages/TimeTracerPage';
import EntityPage from '@/modules/time/entity/_common/components/EntityPage';
import {ACTIVITY_ENTITY, STREAM_ENTITY, TAG_ENTITY, WORD_ENTITY} from '@/modules/time/entity/entityMap';

const App = () => {
  const [state, setState] = useState({});

  useEffect(
    () => {
      const ws = new WebSocket('ws://localhost:8002/');
      ws.onmessage = (response) => {
        setState(JSON.parse(response.data));
      };
    }
    , []);

  return (
    <DBContext.Provider value={state}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <MainPage />
          </Route>

          <Route exact={true} path="/typing">
            <TypingPage />
          </Route>

          <Route exact={true} path="/time_tracer">
            <TimeTracerPage />
          </Route>

          <Route exact={true} path={`/:entity(${WORD_ENTITY}|${ACTIVITY_ENTITY}|${TAG_ENTITY}|${STREAM_ENTITY})/:id`}>
            <EntityPage />
          </Route>
        </Switch>
      </Router>
    </DBContext.Provider>
  )
};

export default App;