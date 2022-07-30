import React from 'react'

export const MySelect = ({defaultValue,options,value,onChange}) => {
  return (
    
    <select
    value={value}
    onChange={e=>onChange(e.target.value)}
    >
      <option disabled >{defaultValue}</option>
      {
        options.map(option =>
        <option key={option.value} value={option.value}>{option.name}</option>
        )
      }
    </select>
    
  )
}
