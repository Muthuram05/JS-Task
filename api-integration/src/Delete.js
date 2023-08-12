import React from 'react'

const Delete = () => {
    function handleDelete(num){
        fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
            method: 'DELETE',
        }).then(response => response.json()).then(data => console.log(data));
    }
  return (
    <div>
       <input type='number' onChange={(e) => handleDelete(e.target.value)}/>
    </div>
  )
}

export default Delete