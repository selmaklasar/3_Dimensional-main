
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  routeModelSelected: "crop_top",
};

const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    setRouteModelSelected: (state, action) => {
      state.routeModelSelected = action.payload;
    },
  },
});

export const { setRouteModelSelected } = modelSlice.actions;

export default modelSlice.reducer;
