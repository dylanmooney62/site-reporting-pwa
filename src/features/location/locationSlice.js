import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrentPositionAsync } from './utils';

const initialState = {
  coords: null,
  status: 'idle',
  error: null,
};

// Thunks
export const getLocation = createAsyncThunk(
  'location/getLocation',
  async () => {
    const position = await getCurrentPositionAsync({
      enableHighAccuracy: true,
      maximumAge: 1000,
      timeout: 1000,
    });

    return {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
  }
);

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getLocation.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getLocation.fulfilled, (state, action) => {
      state.coords = action.payload;
      state.status = 'succeeded';
    });
    builder.addCase(getLocation.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = 'failed';
    });
  },
});

export default locationSlice.reducer;

// Selectors
export const selectLocation = (state) => state.location.coords;

export const selectLocationError = (state) => state.location.error;

export const selectLocationStatus = (state) => state.location.status;
