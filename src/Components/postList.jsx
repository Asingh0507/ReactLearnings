import React from 'react';
import { useGetPostsQuery } from './apiSlice';

const PostList = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostList;
