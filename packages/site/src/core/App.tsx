import React, { FC } from 'react';
import { InitUiKit } from '@instant1100/ui-kit';
import { AppProviderDB, FirebaseProvider } from '@instant1100/store';

import AppRouter from './AppRouter';

const App:FC = () => (
  <>
    <InitUiKit />

    <AppProviderDB>
      <FirebaseProvider>
        <AppRouter />
      </FirebaseProvider>
    </AppProviderDB>
  </>
);

export default App;
