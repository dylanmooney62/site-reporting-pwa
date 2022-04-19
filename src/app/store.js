import { configureStore } from '@reduxjs/toolkit';

import locationReducer from '../features/location/locationSlice';
import postsReducer from '../features/post/postsSlice';
import mapReducer from '../features/map/mapSlice';

export default configureStore({
  reducer: {
    location: locationReducer,
    posts: postsReducer,
    map: mapReducer,
  },
});
