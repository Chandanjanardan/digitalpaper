import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

function Register() {
  const navigate=useNavigate()
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
 async function register(ev){
    ev.preventDefault()
    
      
      let response=await  fetch("http://localhost:4000/register",{
          method:"POST",
          body:JSON.stringify({username,password}),
          headers:{"Content-Type":"application/json"}
        })
       if(response.status===200){
         alert("Registration successfull")
         navigate("/login")
        }else{
         alert("Registration falied")
       }
    
  }
  console.log(username,password)
  return (
    
    <form className='register' onSubmit={register}>
      <h1>Register</h1>
    <input value={username} onChange={ev=>setUsername(ev.target.value)} type='text' placeholder='username'/>
    <input value={password} onChange={ev=>setPassword(ev.target.value)} type='password' placeholder='password'/>
    <button>Register</button>
  </form>
  )
}

export default Register