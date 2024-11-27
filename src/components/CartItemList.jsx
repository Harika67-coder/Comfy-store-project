
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
const cartItemList = () => {
  const cartItems=useSelector((state)=>state.cart.cartItems)
  return (
    <>
      <div className='mb-16'>
         <div>
          {cartItems.map((item,index)=>{
            return <CartItem key={item.productId} {...item} index={index}/> 
      
           
          })}
         </div>
      </div></>
  )
}

export default cartItemList