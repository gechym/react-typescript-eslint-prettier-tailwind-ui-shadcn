import React, { useReducer } from 'react';
import PostContex from './PostContex';
import reducerPost from './PostReducer';

type PropsType = {
  children : React.ReactNode
};

const initState = {
  isLoading: false,
  data: [],
  error: '',
};

function PostProvider({ children } : PropsType) {
  const [state, dispatch] = useReducer(reducerPost, initState);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PostContex.Provider value={{ state, dispatch }}>
      {children}
    </PostContex.Provider>
  );
}

export default PostProvider;
