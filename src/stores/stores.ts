import { configureStore } from '@reduxjs/toolkit';
import postSlice from 'stores/slicer/post.slice';
import themeSlice from './slicer/theme.slice';
import userSlice from './slicer/user.slice';
import tokenSlice from './slicer/token.slice';

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    post: postSlice.reducer,
    user: userSlice.reducer,
    token: tokenSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
