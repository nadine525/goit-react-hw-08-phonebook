import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const PersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// export const store = configureStore({
//   reducer: { contacts: contactsReducer, filter: filterReducer },
// });

const persistedReducer = persistReducer(PersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
