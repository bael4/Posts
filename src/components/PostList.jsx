import React from 'react'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
import { PostItem } from './PostItem'

const PostList = ({post,title,remove}) => {
  if(!post.length){
    return(
        <h1 style={{textAlign:'center'}}>Постов не существует</h1>
          )
  }
  return (
    <div>
    <h1 style={{textAlign:'center'}}>{title}</h1>
    <TransitionGroup>
    {post.map((post)=>
      <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
        
        <PostItem key={post.id}remove={remove}  posts={post}/>
        </CSSTransition>
                )}
    </TransitionGroup>
       
    </div>
  )
}

export default PostList