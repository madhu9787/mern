import React from 'react'
import Child from "./Child";   // no curly braces

const Parent = () => {
    const getData=(data)=>{
        console.log("Data received from Child:",data)
    }
  return (
    <div>
        <Child send={getData}/>
    </div>
  )
}

export default Parent