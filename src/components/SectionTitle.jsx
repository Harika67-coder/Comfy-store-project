import React from 'react'

const SectionTitle = ({text}) => {
  return (
    <div>
      <h2 className='font-semibold
        text-3xl tracking-wider'>{text}</h2>
        <div className='align-element border-b border-base-300 mt-5  border-solid  '>
        </div>
    </div>
  )
}

export default SectionTitle