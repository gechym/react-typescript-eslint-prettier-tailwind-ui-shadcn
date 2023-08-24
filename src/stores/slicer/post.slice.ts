import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// type
import PostType, { PostStateType } from 'types/post.type';
import request from 'services/api/request';
import handleFetchError from 'utils/handleFetchError';

const initialState : PostStateType = {
  isLoading: false,
  data: [] as PostType[],
  error: '',
};

type AsyncThunkConfig = {
  rejectValue : string
  extra: {
    jwt: string
  }
};

export const fetchPosts = createAsyncThunk< PostType[], number, AsyncThunkConfig>('post/fetchPosts', async (number, thuckAPI) => {
  try {
    const res = await request.get<PostType[]>('posts');
    if (res.data) {
      const data = await res.data;
      return thuckAPI.fulfillWithValue(data);
    }
    return thuckAPI.rejectWithValue(`Failed to get what I want, got status: ${res.status}`);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error : any) {
    return thuckAPI.rejectWithValue(handleFetchError(error));
  }
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    }).addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }).addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || 'Something went wrong';
    });
  },
});

export default postSlice;

// const todosSlice = createSlice({
//   name: 'todos',
//   initialState: [] as Item[],
//   reducers: {
//     addTodo: {
//       reducer: (state, action: PayloadAction<Item>) => {
//         state.push(action.payload)
//       },
//       prepare: (text: string) => {
//         const id = nanoid()
//         return { payload: { id, text } }
//       },
//     },
//   },
// })
