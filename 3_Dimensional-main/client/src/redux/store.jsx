
import { configureStore } from '@reduxjs/toolkit';
import modelReducer from './model_slice';
import model_parts from './model_parts';

export const store = configureStore({
  reducer: {
    model: modelReducer,
    modelparts:model_parts,
  },

});
