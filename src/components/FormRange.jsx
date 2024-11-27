import { formatPrice } from "../utils";
import { useState } from "react";
const FormRange = ({name,type,price,label,size}) => {
  const maxPrice=100000;
  const step=1000;
  const [selectedPrice,setSelectedPrice]=useState(price || maxPrice);
  return (
    <div className='form-control'>
    <label htmlFor={name} className='label'>
      
      <span className='label-text capitalize'>{label}</span>
      <span>{formatPrice(selectedPrice)}</span>
    
    </label>
    <input type={type} min="0" step={step} 
        name={name}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}/>
    <label className='label text-sm font-semibold'>
    <span>0</span> 
    <span>Max:{formatPrice(maxPrice)}</span>
    </label>    
  </div>
  )
}

export default FormRange