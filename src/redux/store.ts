import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

// import shopsReducer from './news/newsSlice';
import basketReducer from "./basket/basketSlice";

// const newsPersistConfig = {
//   key: 'news',
//   storage,
// };

const basketPersistConfig = {
  key: 'basket',
  storage,
};

// const NewsPersistedReducer = persistReducer(newsPersistConfig, newsReducer);
const BasketPersistConfig = persistReducer(basketPersistConfig, basketReducer);

const rootReducer = combineReducers({ 
    // news: NewsPersistedReducer,
    basket: BasketPersistConfig
})


const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);

export default store;

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;