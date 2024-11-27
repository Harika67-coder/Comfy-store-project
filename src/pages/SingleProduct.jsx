import { useState } from 'react';
import { useLoaderData ,NavLink} from 'react-router-dom';
import {customFetch, formatPrice,generateAmountOptions} from '../utils/index'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
const singleProductQuery = (id) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: () => customFetch.get(`/products/${id}`),
  };
};

export const loader=(queryClient)=>async({params})=>{
  const response = await queryClient.ensureQueryData(singleProductQuery(params.id))
  return {product:response.data.data};
}
const SingleProduct = () => {
  const {product}=useLoaderData();
  const {title,price,company,description,colors,image}=product.attributes;
  const [amount,setAmount]=useState(1);
  const handleAmount=(e)=>{
      setAmount(parseInt(e.target.value));
  }
  const [productColor,setProductColor]=useState(colors[0]);
  const cartItems=useSelector((state)=>state.cart);
  const dollarAmount=formatPrice(price);
  const cartProduct={
    productId:product.id,
    image,
    title,
    price:price/100,
    company,
    productColor,
    amount,
  }
  const dispatch=useDispatch();
  const addToCart=()=>{
    cartProduct.cartId=product.id+productColor;
    
    dispatch(addItem({product:cartProduct}));
  }
  return (
    <section>
      <div className='breadcrumbs text-md'>
         <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/products'>Products</NavLink>
          </li>
         </ul>
      </div>
      <div className='grid lg:grid-cols-2 gap-x-16'>
         <div className='mt-[26px] '>
          <img src={image} alt={title} className='w-[28rem] h-[24rem] rounded-lg object-cover lg:w-full '/>
         </div>
         <div>
          <h1 className='font-bold tracking-wider text-3xl capitalize mt-7'>{title}</h1>
          <p className='text-xl font-bold text-slate-300 mt-[10px]'>{company}</p>
          <p className='text-xl mt-[10px]'>{dollarAmount}</p>
          <p className='mt-[25px] leading-8'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
          <div className='mt-[30px]'>
            <p className='mb-[10px] font-semibold'>Colors</p>
            <div>{colors.map((color)=>{
              return <button key={color}  type='button' className={`badge w-6 h-6 mr-2 ${color===productColor && 'border-2 border-secondary'}`} style={{background:color}} onClick={()=>
                setProductColor(color)
               
              }></button>
            })}
            </div>
          </div>
          <div className='form-control w-full max-w-xs'>
         <label className='label' htmlFor='amount'>
          <h4 className='text-md font-medium -tracking-wider '>Amount</h4>
         </label>
         <select id="amount" name="amount" className='select select-bordered select-secondary select-md p-3'value={amount} onChange={handleAmount}>
          {generateAmountOptions(20)}
         </select>
         </div>
         <div className='mt-10'>
          <button className='btn btn-secondary' onClick={
            addToCart}>ADD TO BAG</button>
         </div>
         </div>
      </div>
    </section>
  )
}

export default SingleProduct