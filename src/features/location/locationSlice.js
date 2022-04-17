import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrentPositionAsync } from './utils';

const initialState = {
  coords: null,
  address: null,
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
    });

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    return {
      lat,
      lng,
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
      const { lat, lng, address } = action.payload;
      state.coords = { lat, lng };
      state.address = address;
      state.status = 'succeeded';
    });
    builder.addCase(getLocation.rejected, (state, action) => {
      // Set default coords to center of the UK
      state.coords = { lat: 54.971, lng: -2.45682 };
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
