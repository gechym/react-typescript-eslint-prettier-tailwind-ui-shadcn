import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import requestAuth from 'services/api/requestAuth';
import { User, UserStateType } from 'types/userState.type';
import handleFetchError from 'utils/handleFetchError';

const initialState : UserStateType = {
  isLoading: false,
  error: '',
  user: null,
};

type DataInputType = {
  username: string,
  password: string,
};

type AsyncThunkConfig = {
  rejectValue : string
  extra: {
    jwt: string
  }
};

export const login = createAsyncThunk<User, DataInputType, AsyncThunkConfig>('user/login', async (dataInout, thuckAPI) => {
  try {
    const res = await requestAuth.post('login', dataInout);
    if (res.data) {
      const dataUser : User = {
        name: res.data.name,
        rule: res.data.rule,
      } as User;

      return thuckAPI.fulfillWithValue(dataUser);
    }
    return thuckAPI.rejectWithValue('Something went wrong');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return thuckAPI.rejectWithValue(handleFetchError(error));
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    }).addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = '';
    }).addCase(login.rejected, (state, action) => {
      state.user = null;
      state.error = action.payload || 'Something went wrong';
      state.isLoading = false;
    });
  },
});

export default userSlice;
