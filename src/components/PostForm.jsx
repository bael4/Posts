import React,{useState}from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MuInput'

const PostForm = ({create}) => {


const [post,setPost]= useState({title:'', body:''})

const addNewPost = (e)=>{
 
e.preventDefault()
const newPost = {
    ...post, id:1
}
create(newPost)

}

  return (
    <div>
<MyInput
 value={post.title}   
 onChange={e => setPost({...post, title:e.target.value})}
 type='text'
/>
<MyInput
 value={post.body}   
 onChange={e => setPost({...post, body:e.target.value})}
 type='text'

/>
<MyButton
onClick={addNewPost}
>
    Создать
</MyButton>
</div>
  )
}

export default PostForm