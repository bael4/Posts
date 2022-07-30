import React from 'react'
import MyInput from './UI/input/MuInput'
import { MySelect } from './UI/select/MySelect'

export const PostFilter = ({filter,setFilter}) => {
  return (
    <div>
         <MyInput
    value={filter.query}
    onChange={e=> setFilter({...filter, query:e.target.value})}
   />
     <hr style={{margin:'15px 0'}}/>
    <MySelect
     value={filter.sort}
    onChange={selectedSort=> setFilter({...filter,sort:selectedSort})}
     
     defaultValue={'Cортировка'}
     options={[
      {value:'title',name:'по названию'},
      {value:'body',name:'по описанию'}
            ]}
     
      />
    </div>
  )
}
