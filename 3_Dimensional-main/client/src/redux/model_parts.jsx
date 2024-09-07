
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPart: null,
};

const modelparts = createSlice({
  name: 'modelparts',
  initialState,
  reducers: {
    setSelectedPart: (state, action) => {
      state.selectedPart = action.payload;
    },
  },
});

export const { setSelectedPart } = modelparts.actions;

export default modelparts.reducer;
