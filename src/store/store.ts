import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../slices/themeSlice';
import historySlice from '../slices/historySlice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    history: historySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
