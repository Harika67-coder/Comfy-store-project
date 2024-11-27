import React from 'react'

const FormCheck = ({label,type,name,size}) => {
  return (
    <div className='form-control flex items-center justify-center'>
    <label htmlFor={name} className='label'>
      
      <span className='label-text capitalize'>{label}</span>
    </label>
    <input type={type} name={name}
        className={`checkbox checkbox-primary ${size}`}/>
  </div>  
  )
}

export default FormCheck