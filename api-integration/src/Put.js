import React, { useState } from 'react'

const Put = () => {
  const [loading,setLoading] =  useState(false);
  const [err,setErr] =  useState();
  const [data,setData] =  useState({
    title:"",
    body:""
  });
  const [controller,setController] =  useState();
  const handleLoad =async () =>{
    setLoading(true);
    setErr(false);
    try {
        const newController = new AbortController();
        setController(newController);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            
            body: JSON.stringify({
              title:data.title,
              body: data.body,
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          signal:newController.signal},
        )
        const result = await response.json();
        console.log(result);
    } catch (error) {
        if (error.name === 'AbortError') {
            setErr('Fetch operation aborted.');
          } else {
            setErr(error.message);
            setLoading(false);
          }
    }

    setLoading(false)
  }
  function handleAbort(){
    if(controller){
        controller.abort();
        setController(null);
        setLoading(false);
    }
  }
  return(
    <div>
        <h1>Put</h1>
        {err} <br />
        <input type='text' onChange={(e)=>setData({...data,title:e.target.value})}/> <br />
        <input type='text' onChange={(e)=>setData({...data,body:e.target.value})}/> <br />
        {loading ? <button onClick={handleAbort}>Abort</button>: <button onClick={handleLoad}>Load</button>}
    </div>
  )
}

// setData( ( p ) => ( {...p, title:' '} ) )
export default Put