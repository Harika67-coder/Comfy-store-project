import React from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
const PaginationContainer = () => {
  const {meta}=useLoaderData();
  const {search,pathname}=useLocation();
  
  const navigate=useNavigate();
  const {page,pageCount,pageSize,total}=meta.pagination;
  const handlePageChange=(pageNumber)=>{
    const searchParams=new URLSearchParams(search);
    searchParams.set('page',pageNumber)
    console.log(searchParams)
    navigate(`${pathname}?${searchParams.toString()}`);
  
  }
  if(pageCount<2)
    return null;
  return (
    <div className='mt-16 flex justify-end'>
       <button className='btn bg-base-200 btn-xs sm:btn-md rounded-none rounded-tl-lg rounded-bl-lg' onClick={()=>{
        let prevPage=page-1;
        if(prevPage<1) prevPage=pageCount;
        handlePageChange(prevPage);
       }}>
        PREV
       </button>
       {Array.from({length:pageCount},(_,index)=>{
        return <button key={index+1} className={`btn btn-xs sm:btn-md rounded-none ${page===index+1?'bg-base-300 border-base-300':''}`} onClick={()=>{
            handlePageChange(index+1);
        }}>
        {`${index+1}`}
       </button>;
       })}
       <button className='btn btn-xs sm:btn-md rounded-none border-none rounded-tr-lg rounded-br-lg ${}' onClick={()=>{
        let nextPage=page+1;
        if(nextPage>pageCount) nextPage=1;
        handlePageChange(nextPage);
       }}>
        NEXT
       </button>
    </div>
  )
}

export default PaginationContainer