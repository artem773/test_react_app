/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ClassCounter from "./components/classCounter";
import Counter from "./components/counter";
import './styles/app.css';
import PostItem from "./components/postItem";
import PostsList from "./components/postsList";

function App() {  
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript_1', body: 'Descr'},
        {id: 2, title: 'JavaScript_2', body: 'Descr'},
        {id: 3, title: 'JavaScript_3', body: 'Descr'},
    ]);
    const [posts2, setPosts2] = useState([
      {id: 1, title: 'Python_1', body: 'Descr'},
      {id: 2, title: 'Python_2', body: 'Descr'},
      {id: 3, title: 'Python_3', body: 'Descr'},
  ]);


  return (
    <div className="App">
        <PostsList posts={posts} title="Posts about JS"/>
        <PostsList posts={posts2} title="Posts about Python"/>
    </div> 
  )
}

export default App;