import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { db } from '../../app/db';

const initialState = {
  posts: [],
  error: null,
  status: 'idle',
};

// Thunks
export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const posts = await db.posts.toArray();
  return posts;
});

export const addPost = createAsyncThunk(
  'posts/addPost',
  async ({ name, type, description, image, location }) => {
    const post = {
      id: nanoid(),
      name,
      type,
      description,
      image,
      location,
      date: new Date().toISOString(),
    };

    await db.posts.add(post);

    return post;
  }
);

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  await db.posts.delete(id);

  return id;
});

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({ id, name, type, description }, { getState, rejectWithValue }) => {
    const existingPost = getState().posts.posts.find((post) => post.id === id);

    if (!existingPost) {
      return rejectWithValue(new Error('Post not found'));
    }

    const updatedPost = {
      ...existingPost,
      name,
      type,
      description,
    };

    await db.posts.update(id, updatedPost);

    return updatedPost;
  }
);

const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    resetPostsStatus: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers(builder) {
    // Retrieving Posts
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.status = 'loading';
        state.posts = action.payload;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    // Creating Posts
    builder
      .addCase(addPost.pending, (state) => {
        state.status = 'posting';
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = 'added';
        state.posts.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
    // Deleting Posts
    builder
      .addCase(deletePost.pending, (state) => {
        state.status = 'deleting';
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
        state.status = 'deleted';
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
    // Updating Posts
    builder
      .addCase(updatePost.pending, (state) => {
        state.status = 'updating';
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = 'updated';

        const updatedPost = action.payload;

        const existingPost = state.posts.findIndex(
          (p) => p.id === updatedPost.id
        );

        state.posts[existingPost] = updatedPost;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export default postsSlice.reducer;

export const { resetPostsStatus } = postsSlice.actions;

export const selectPosts = (state) => state.posts.posts;

export const selectPostById = (state, id) =>
  state.posts.posts.find((post) => post.id === id);

export const selectPostsStatus = (state) => state.posts.status;

export const selectPostsError = (state) => state.posts.error;
