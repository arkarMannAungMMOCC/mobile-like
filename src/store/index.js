import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './reducer/counterSlice';
import productSlice from './reducer/productSlice';
import rootSlice from './reducer/rootSlice';
export const store = configureStore({
  reducer: {
    root: rootSlice,
    counter: counterSlice,
    product: productSlice
  },
});