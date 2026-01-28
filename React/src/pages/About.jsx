import React, { use } from 'react'
import {useState,useEffect} from 'react'
const About = () => {
 const[user,setUser]=useState([])
 useEffect(()=>{
fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(data => setUser(data));
 },[])
 console.log(user);
  return (
     <div>
        <h1>User Details</h1>
        {user.map((user)=>(
          <div key={user.id}>
        <h2>{user.id}</h2>
        <p>Name:{user.username}</p>
        <p> Email:{user.email}</p>
        <p>Password:{user.password}</p>
    </div>
        ))}
        </div>
  )
}

export default About