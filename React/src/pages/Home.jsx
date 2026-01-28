import React from 'react'
import Parent from '../components/Parent'
import Profile from '../components/Profile'
import State from '../hooks/State'
import Form from '../hooks/Form'
import{Link} from "react-router-dom"
import Reducer from '../hooks/Reducer'
import { userContext} from '../App'
import {useState} from 'react'

const Home = () => {
  const[user,setUser]=useState("abcd") 
  return (
    <div>
      <Link to={'/Form'}>Form</Link><br/>
      <Link to={'/State'}>State example</Link><br/>
      <Link to={'/reducer'}>UseReducer example</Link>
      <userContext.Provider value={user}>
    <Profile  age={20} skills={["HTML","CSS","JS","JAVA","NODE"]}/>
     </userContext.Provider> 
     <Parent/>
    </div>
  )
}
export default Home