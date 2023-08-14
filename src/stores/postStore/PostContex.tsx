import { createContext } from 'react';
import { AcctionType, StateType } from './PostReducer';

type ValueContexType = {
  state : StateType,
  dispatch : React.Dispatch<AcctionType>
};

const defaultValue : ValueContexType = {
  state: {
    data: [],
    isLoading: false,
  },
  dispatch: () => null,
};

const PostContex = createContext<ValueContexType>(defaultValue);

export default PostContex;
