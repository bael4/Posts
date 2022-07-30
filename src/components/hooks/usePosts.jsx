import  { useMemo } from "react";


export const useSortedPosts = (posts,sort)=>{
    const sortedPost = useMemo(()=>{
        if(sort){
         return  [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
        
       },[sort,posts])
       return sortedPost
}

export const usePosts = (posts,sort,query)=>{
    const sortedPosts = useSortedPosts(posts,sort)
    const sortedAndSearchPost = useMemo(()=>{
        return sortedPosts.filter(post=>post.title.toLowerCase().includes(query.toLowerCase()))
      },[sortedPosts,query])
      return sortedAndSearchPost
}
