import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppRouter from '@/core/AppRouter';
import AppProviderDB from '@/core/AppDB/AppProviderDB';

const App = () => (
  <>
    <CssBaseline />

    <AppProviderDB>
      <AppRouter />
    </AppProviderDB>
  </>
);

export default App;
