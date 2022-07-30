import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context'
import { privateRoutes,publicRoutes } from '../router/router'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {
    
    const {isAuth,isLoading} = useContext(AuthContext)
    console.log(isAuth);

if(isLoading){
    return <Loader/>
}

    return (
        <div>{
    isAuth
    ? <Routes>
  
    {privateRoutes.map(route =>{
     return <Route element={<route.element/>} path={route.path} exact key={route.path}/>
    })}
  
      <Route path="/*" element={<Navigate to="/posts" replace />} />
      </Routes>
    :
    <Routes>
  
    {publicRoutes.map(route =>{
     return <Route element={<route.element/>} path={route.path} exact key={route.path}/>
    })}
  
      <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>}
        </div>
      )
}

export default AppRouter