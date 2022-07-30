import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import MyButton from './UI/button/MyButton'



export const PostItem = (props) => {

const router = useNavigate()
// console.log(router);

  return (
    <div className='post'>
    <div className='post_content'>
      <strong>{props.posts.id}. {props.posts.title}</strong>
      <div>{props.posts.body}</div>
    </div>
    <div className='post__btns'>
    <MyButton onClick={()=> router(`/posts/${props.posts.id}`)}>
    Открыть
    </MyButton>
    
    <MyButton onClick={()=> props.remove(props.posts)}>
    Удалить
    </MyButton>
    </div>
  
  </div>
  )
}
