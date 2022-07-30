
import React,{ useEffect, useState} from "react";
import PostSevice from "../API/PostService";
import { useFetching } from "../components/hooks/useFetching";
import { usePosts } from "../components/hooks/usePosts";
import { PostFilter } from "../components/PostFilter";
import PostForm from "../components/PostForm";

import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import MyModal from "../components/UI/MyModal/MyModal";
import Pagination from "../components/UI/pagination/Pagination";
import { getPageCount,  } from "../utils/pages";





function Posts() {
  const [posts,setPosts] = useState([])
  const [filter,setFilter] = useState({
    sort:'',
    query:''
  })
  
const [modal,setModal] = useState(false)
const [totalPages,setTotalPages] = useState(0)
const [limit,setLimit] = useState(10)
const [page,setPage] = useState(1)
const sortedAndSearchPost = usePosts(posts,filter.sort,filter.query)


const [fetchPost,isPostLoading,postError] = useFetching(async(limit,page)=>{
  const res = await PostSevice.getAll(limit,page)
  setPosts(res.data)
  console.log(res.data)

  const totalCount = res.headers['x-total-count'];
  setTotalPages(getPageCount(totalCount,limit))
  

})
  
useEffect(()=>{
  fetchPost(limit,page)
},[])


const changePage  =(page)=>{
     setPage(page)
     fetchPost(limit,page)
}





const createPost = (newPost)=>{
  setPosts([...posts, newPost])

}

const removePost = (post)=>{
setPosts(posts.filter(p=> p.id !== post.id))
}

return (
    <div className="App">
    <MyButton onClick={()=> setModal(true)}>
    Открыть
    </MyButton>
    <MyModal visible={modal} setVisible={setModal}>
    <PostForm create={createPost}/>
    </MyModal>
    
    <PostFilter filter={filter} setFilter={setFilter}/>
    {postError && 
    <h1>Произошла ошибка</h1>
    }
    {isPostLoading
    ?<div style={{display:'flex', justifyContent:'center', marginTop:50}}><Loader/></div>
    :<PostList post={sortedAndSearchPost} remove={removePost} title='Cписок постов'/>
    }
   
   <Pagination page={page} totalPages={totalPages} changePage={changePage}/>
     </div>
  );
}

export default Posts;
