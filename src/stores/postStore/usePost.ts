import { useContext } from 'react';
import PostContex from './PostContex';

const usePost = () => {
  const context = useContext(PostContex);

  return context;
};

export default usePost;
