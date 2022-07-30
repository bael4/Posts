import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostSevice from '../API/PostService'
import { useFetching } from '../components/hooks/useFetching'
import Loader from '../components/UI/Loader/Loader'



const PostIdPage = () => {

const params = useParams()
const [post,setPost] = useState({})
const [com,setCom] = useState([])
const [fetchPostById,isLoading,error] = useFetching(async(id)=>{
    const  res = await PostSevice.getById(params.id)
    setPost(res.data)
})

const [fetchPostComments,isComLoading,comError] = useFetching(async(id)=>{
    const  res = await PostSevice.getCommentById(params.id)
    setCom(res.data)
})


useEffect(()=>{
fetchPostById(params.id)
fetchPostComments(params.id)
},[])

  return (
    <div>
        <h1>
            Вы открыли страницу поста с ID = {params.id}
        </h1>
    
        {
         isLoading 
         ?<div style={{display:'flex', justifyContent:'center', marginTop:50}}><Loader/></div>
         : <div>{post.id}. {post.title}</div>
        }
        <h1>
          комментарии
        </h1>
        {
            isComLoading
         ?<div style={{display:'flex', justifyContent:'center', marginTop:50}}><Loader/></div>
         : <div>
            {
                com.map(c=>
                <div key={c.id} style={{marginTop:30}}>
                <h5>{c.email}</h5>
                <div>{c.body}</div>
                </div>
                
                
                )

            }
         </div>
           
            
        }
           
        
    </div>
  )
}

export default PostIdPage