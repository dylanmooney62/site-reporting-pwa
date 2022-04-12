import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  viewState: null,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    MapViewStateUpdated(state, action) {
      state.viewState = action.payload;
    },
  },
});

export default mapSlice.reducer;

// Actions
export const { MapViewStateUpdated } = mapSlice.actions;

// Selectors
export const selectMapViewState = (state) => state.map.viewState;
