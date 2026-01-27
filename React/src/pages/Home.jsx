import React from 'react'
import Parent from '../components/Parent'
import Profile from '../components/Profile'
import State from '../hooks/State'
import Form from '../hooks/Form'
const Home = () => {
  return (
    <div>
    <Profile name="madhu" age={20} skills={["HTML","CSS","JS","JAVA","NODE"]}/>
    <State />
    <Parent />
    <Form/>
    </div>
  )
}

export default Home