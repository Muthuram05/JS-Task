import React, { useState } from 'react'

const Post = () => {
  const [inputData,setInputData] =  useState({
    title: "",
    body: ""
  });
  const [data,setData] =  useState();
  const handle = async () =>{
   await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      id:1,
      title: inputData.title,
      body: inputData.body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
  })
    .then((response) => response.json())
    .then((json) => setData(json));
  }
  return (
    <div>
      <h1>Post</h1> 
      <input type='text' onChange={(e) => setInputData({...inputData,title: e.target.value})} value={inputData.title}/> <br/>
      <input type='text' onChange={(e) => setInputData({...inputData,body: e.target.value})} value={inputData.body}/> <br />
      <button onClick={handle}>Submit</button>
      {data ? <div>
      {data.id}
      {data.title}
      {data.body}
      </div> : null}
    </div>
  )
}

export default Post