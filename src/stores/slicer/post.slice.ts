import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type
import PostType, { PostStateType } from 'types/post.type';

const initialState : PostStateType = {
  isLoading: false,
  data: [] as PostType[],
  error: '',
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getingPost: (state) => {
      state.isLoading = true;
    },
    getPost: (state, action : PayloadAction<PostType[]>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    getPostError: (state) => {
      state.error = 'oh shit';
      state.isLoading = false;
    },
  },
});

export default postSlice;

//
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
