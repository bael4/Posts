import React from 'react'
import st from './MyInput.module.css'
const MyInput = (props) => {
  return (
    <input className={st.myInput} {...props}/>
  )
}

export default MyInput