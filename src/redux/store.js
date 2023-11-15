import { configureStore } from '@reduxjs/toolkit';

import filterSlice from './slices/filterSlice';
import headerSlice from './slices/headerSlice';
import cardsSlice from './slices/cardsSlice';
import cardSlice from './slices/cardSlice';

export const store = configureStore({
  reducer: {
    filterSlice,
    headerSlice,
    cardsSlice,
    cardSlice
  },
})