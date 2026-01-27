import  { useState } from 'react'
const State = () => {
    const[count,setCount]=useState(0)
    const[like,setLike]=useState(0)
  return (
    <div>
        <h2>useState example</h2>
        <h2>Total Likes 👍 : {like}</h2>
        <button onClick={()=>setLike(like+1)}>Like👍</button>


        <button onClick={()=>setLike(like-1)}>Dislike👎</button>
        <h3>Count:{count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>

  )
}
export default State