import { configureStore } from '@reduxjs/toolkit';

import locationReducer from '../features/location/locationSlice';
import mapReducer from '../features/map/mapSlice';

export default configureStore({
  reducer: {
    location: locationReducer,
    map: mapReducer,
  },
});
