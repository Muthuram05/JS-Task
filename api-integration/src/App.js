import React, { useEffect } from "react";
import './App.css'
import Get from "./Get"
import Post from "./Post";
import Put from "./Put";
import Delete from "./Delete";
const App = () => {

  return (   
    <div className="App">
        <Get />
        <Post />
        <Put />
        <Delete />
    </div>
  );
};

export default App;
