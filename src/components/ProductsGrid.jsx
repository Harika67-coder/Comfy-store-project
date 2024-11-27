import { Link, useLoaderData } from "react-router-dom"
import { formatPrice } from "../utils/index";
const ProductsGrid = () => {
  const {products}=useLoaderData();
  return (
    <div className='mt-12 grid 
    md:grid-cols-2 gap-4 lg:grid-cols-3 '>
           {products.map((product)=>{
            const {image,price,title}=product.attributes;
            const priceAmount=formatPrice(price);
            return <Link className="w-90 sm:h-[24.5rem] md:h-[20.5rem] shadow-xl p-4 space-x-4 rounded-box hover:shadow-2xl transition duration-300 " to={`/products/${product.id}`} key={product.id}>
                      <div>
                        <img src={image} alt={title} className="w-full sm:h-[16rem] md:h-[12rem] object-cover rounded-box"/>
                        <h2 className="text-xl font-semibold tracking-wider capitalize text-center mt-8">{title}</h2>
                        <p
                          className="text-secondary text-center mt-2">{priceAmount}</p>
                      </div>
                   </Link>
           })}
        </div>
  )
}

export default ProductsGrid