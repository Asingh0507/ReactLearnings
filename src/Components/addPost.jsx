import React, { useState } from 'react';
import { useCreatePostMutation } from './apiSlice';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [createPost] = useCreatePostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title) {
      await createPost({ title });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
