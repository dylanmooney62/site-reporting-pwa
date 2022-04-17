import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  error: null,
  status: 'idle',
};

// Thunks
export const addPost = createAsyncThunk('posts/addPost', async (post) => {
  // Simulate server latency
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return {
    id: nanoid(),
    date: new Date().toISOString(),
    ...post,
    type: post.type.value,
  };
});

const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    resetPostsStatus: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder.addCase(addPost.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
      state.status = 'succeeded';
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.error = action.error;
      state.status = 'failed';
    });
  },
});

export default postsSlice.reducer;

export const { resetPostsStatus } = postsSlice.actions;

export const selectPosts = (state) => state.posts.posts;

export const selectPostsStatus = (state) => state.posts.status;

export const selectPostsError = (state) => state.posts.error;
