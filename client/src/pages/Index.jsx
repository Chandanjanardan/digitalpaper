import React ,{useEffect,useState}from 'react'
import Posts from '../components/Posts'

function Index() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/post").then(response=>{
      response.json().then(posts=>{
       setPosts(posts.posts)
      })
    })
  },[])
  
  
  return (
    <>
    {posts.length>0 && posts.map((post,Index)=>(
      <Posts key={Index} {...post}/>
      
    ))}
    </>
  )
}

export default Index