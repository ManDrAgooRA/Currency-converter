import { configureStore } from '@reduxjs/toolkit';
import currencySlice from './slices/currency';

export const store = configureStore({
  reducer: {
    currency: currencySlice,
  },
});
