'use client';

import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import { Provider } from 'react-redux';

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
};
