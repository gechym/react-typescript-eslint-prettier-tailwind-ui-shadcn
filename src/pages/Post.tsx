import React, { useEffect } from 'react';
import usePost from 'stores/postStore/usePost';

function Post() {
  const { state, dispatch } = usePost();
  const { data, isLoading, error } = state;

  useEffect(() => {
    dispatch({ type: 'GETING_POST', payload: null });
    fetch('https://jsonplaceholder.typicode.com/postsaaaa')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then((json) => {
        dispatch({ type: 'GET_POST', payload: json });
      })
      .catch(() => {
        dispatch({ type: 'GET_POST_ERROR', payload: 'oh shit!!' });
      });
  }, [dispatch]);

  return (
    <div>
      <span>{isLoading ? 'loading' : ''}</span>
      <span>{error}</span>
      {
        data.length > 0 ? data.map((post) => <h1 key={post.id}>{post.title}</h1>) : <h1>No post</h1>
      }
    </div>
  );
}

export default Post;
