// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { rootReducer } from 'redux/reducer';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({ reducer: persistedReducer });

// export const persistor = persistStore(store);
import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/slice';
import { filtersReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filtersReducer,
  },
});
