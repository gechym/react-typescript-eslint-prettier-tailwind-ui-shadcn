import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// redux
import postSelector from '../stores/selecter/post.selecter';
import { getPost, getPostError, getingPost } from '../stores/action/post.action';

function Post() {
  const posts = useSelector(postSelector);
  const { data, isLoading, error } = posts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getingPost());
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then((json) => {
        dispatch(getPost(json));
      })
      .catch(() => {
        dispatch(getPostError());
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
