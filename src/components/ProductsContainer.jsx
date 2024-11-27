import ProductsGrid from "./ProductsGrid"
import ProductsList from "./ProductsList"
import { BsFillGridFill, BsList } from 'react-icons/bs';
import {useState} from 'react'
import { useLoaderData } from "react-router-dom";
const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout,setLayout]=useState('grid');
  const SetActiveLayout=(pattern)=>{
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-based-content'
    }`;
  }
  return (
    <>
    <div className="flex justify-between items-center border-b border-base-300 pb-4 ">
      <p className="font-semibold m-0">{totalProducts} product{`${totalProducts>1 ?'s':''}`}</p>
      <div className="flex gap-x-2">
        <button className={SetActiveLayout('grid')} onClick={()=>{
          setLayout('grid');
        }}>
           <BsFillGridFill/>
        </button>
        <button className={SetActiveLayout('line')} onClick={()=>{
          setLayout('line');
        }}>
           <BsList/>
        </button>
      </div>
    </div>
    <div>
      {totalProducts<1?<h3 className="mt-16 text-2xl ">
        Sorry no products matched to your search...
      </h3>:layout==='grid'?<ProductsGrid/>:<ProductsList/>}
    </div>
    </>
  )
}

export default ProductsContainer