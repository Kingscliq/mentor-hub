import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import rootReducer from './root';

const getPersisterReducer = () => {
  const isClient = typeof window !== 'undefined';

  if (isClient) {
    const rootConfig = {
      key: 'root',
      storage,
    };

    return persistReducer(rootConfig, rootReducer);
  }

  return rootReducer;
};

export default getPersisterReducer;
