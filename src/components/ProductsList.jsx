import { Link, useLoaderData } from "react-router-dom"
import { formatPrice } from "../utils/index";
const ProductsList = () => {
  const {products}=useLoaderData();
  return (
    <div className='mt-12 flex flex-col gap-y-8'>
           {products.map((product)=>{
            const {image,price,title,company}=product.attributes;
            const dollarsAmount=formatPrice(price);
            return <Link className= "flex flex-col sm:flex-row gap-y-4 bg-base-100 shadow-xl hover:shadow-2xl duration-300 group rounded-lg p-8 flex-wrap " to={`/products/${product.id}`} key={product.id}>
                     
                      <img src={image} className=" h-24 w-24  sm:h-32 sm:w-32 rounded-lg object-cover group-hover:scale-105 transition duration-300"/>
                
                     <div className="mt-1.5 pl-12">
                      <h2 className="text-xl capitalize font-semibold">{title}</h2>
                      <p className="text-neutral-content">{company}</p>
                     </div>
                     <p className='font-medium sm:ml-auto text-lg '>
              {dollarsAmount}
            </p>
                   </Link>
           })}
        </div>
  )
}

export default ProductsList