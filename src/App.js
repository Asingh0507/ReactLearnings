import React from 'react';
import AddPost from './Components/addPost';
import PostList from './Components/postList';


const App = () => {
  return (
    <div>
      <h1>My Blog</h1>
      <AddPost />
      <PostList />
    </div>
  );
};

export default App;
