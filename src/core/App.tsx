import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppRouter from 'ss/core/AppRouter';
import AppProviderDB from './AppDB/AppProviderDB';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';

const App = () => (
  <>
    <CssBaseline />

    <AppProviderDB>
      <FirebaseProvider>
        <AppRouter />
      </FirebaseProvider>
    </AppProviderDB>
  </>
);

export default App;
