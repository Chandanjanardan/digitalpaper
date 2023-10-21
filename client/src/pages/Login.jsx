import React, { useContext, useState } from 'react'
import {useNavigate} from "react-router-dom"
import { UserContext } from '../userContext'

function Login() {
  const navigate=useNavigate()
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const {setUserInfo}=useContext(UserContext)
  async function login (ev){
    ev.preventDefault()
   const response=await fetch("http://localhost:4000/login",{
      method:"POST",
      body:JSON.stringify({username,password}),
      headers:{"content-Type":"application/json"},
      credentials:"include"
    })
   if(response.status===200){
    response.json().then(userInfo=>{
      setUserInfo(userInfo)
    })
      navigate("/")
   }else{
    alert("wrong credentials")
   }
  }
  return (
    
      <form className='login'onSubmit={login}>
        <h1>Login</h1>
        <input type='text' 
        placeholder='username'
        value={username}
        onChange={(ev)=>setUsername(ev.target.value)}/>
        <input 
        type='password' 
        placeholder='password'
        value={password}
        onChange={(ev)=>setPassword(ev.target.value)}
        />
        <button>Login</button>
      </form>
    
  )
}

export default Login