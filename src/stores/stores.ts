import { configureStore } from '@reduxjs/toolkit';
import postSlice from 'stores/slicer/post.slice';
import themeSlice from './slicer/theme.slice';

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    post: postSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
