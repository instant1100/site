import React, { FC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppRouter from '/core/AppRouter';
import AppProviderDB from './AppDB/AppProviderDB';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';

const App:FC<{}> = () => (
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
