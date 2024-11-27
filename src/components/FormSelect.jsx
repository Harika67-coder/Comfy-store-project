import React from 'react'

const FormSelect = ({label,name,items,size}) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <select name={name} className={`select select-bordered ${size}`}>
      {items.map((item)=>{
        return <option key={item} value={item}>{item}</option>
      })}
     </select>
    </div>
    
     
  )
}

export default FormSelect