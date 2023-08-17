import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { fetchPosts } from 'stores/slicer/post.slice';
import { AppDispatch } from 'stores/stores';
import postSelector from '../stores/selecter/post.selecter';

function Post() {
  const posts = useSelector(postSelector);
  const { data, isLoading, error } = posts;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch< AppDispatch | any>();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchPosts(1));
    };
    fetchData();
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
