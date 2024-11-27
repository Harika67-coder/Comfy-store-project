import { generateAmountOptions } from '../utils';
import {removeItem,editItem} from '../features/cart/cartSlice'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const CartItem = ({amount,cartId,company,image,price,productColor,title,index}) => {
  const dispatch=useDispatch();
  const cartItems=useSelector((state)=>state.cart.cartItems);
  return (
    <div className={`flex flex-col sm:flex-row gap-y-4 ${cartItems.length-1>index?'border-b border-base-300 pb-6 mb-14':''}`} key={cartId}>
              <img src={image} alt={title} className='w-[8rem] h-[8rem] object-cover rounded-lg'/>
             
                <div className=' sm:ml-16 sm:w-48 capitalize'>
                <p className="font-semibold">{title}</p>
                <p className='text-sm text-neutral-content mt-2'>{company}</p>
                <p className='flex items-center text-sm mt-4'>Color: <span className='badge badge-sm ml-2' style={{background:productColor}}></span></p>
              </div>
              <div className='sm:ml-12'>
                <div className='form-control max-w-xs'>
                  <label htmlFor='amount' className='label p-0'>
                    <span className='label-text'>Amount</span>
                  </label>
                  <select
                    name='amount'
                    id='amount'
                    className='mt-2 select select-base select-bordered select-xs'
                    value={amount}
                    onChange={(e)=>{
                      dispatch(editItem({ cartId, amount: parseInt(e.target.value) }))
                    }}
                  >
                    {generateAmountOptions(amount + 5)}
                  </select>
                </div>
                {/* REMOVE */}
                <button
                  className='mt-2 link link-primary link-hover text-sm'
                  onClick={()=>{
                    dispatch(removeItem({cartId}));
                  }}
                >
                  remove
                </button>
              </div>
              <p className='font-medium sm:ml-auto'>{price}</p>
              </div>
              
           
  )
}

export default CartItem