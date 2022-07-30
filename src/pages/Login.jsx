import React, { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MuInput'
import { AuthContext } from '../context'

const Login = () => {

const {isAuth,setIsAuth} = useContext(AuthContext)

const login =(e)=>{
e.preventDefault()
setIsAuth(true)
localStorage.setItem('auth','true')
}

  return (
    <div>
    <h1 style={{display:'flex', justifyContent:'center'}}>Login</h1>
    <div>
        <MyInput type='text' placeholder='введите логин'/>
        <MyInput type='text' placeholder='введите пароль'/>
        <MyButton
        onClick={login}
        >Войти</MyButton>
    </div>
    </div>
  )
}

export default Login