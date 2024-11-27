import { useSelector } from "react-redux"
import { formatPrice } from "../utils";
const CartTotals = () => {
  const {orderTotal,shipping,tax,cartTotal}=useSelector((state)=>state.cart);
  
  return (
    <>
    <div className="bg-base-200 shadow-md mt-[5rem] sm:mt-0 lg:mt-0 rounded-box p-8">
      <div className="flex justify-between text-xs border-b pb-2 border-base-300 mb-2">
        <p>Subtotal</p>
        <p className="font-semibold">${`${cartTotal.toFixed(2)}`}</p>
      </div>
      <div className="flex justify-between text-xs border-b pb-2 border-base-300 mb-2">
        <p>Shipping</p>
        <p className="font-semibold">${`${(shipping/100).toFixed(2)}`}</p>
      </div>
      <div className="flex justify-between text-xs border-b pb-2 border-base-300 mb-6">
        <p>Tax</p>
        <p className="font-semibold">${`${tax.toFixed(2)}`}</p>
      </div>
      <div className="flex justify-between text-xs mb-4">
        <p className="text-sm">Order Total</p>
        <p className="font-semibold">${`${orderTotal.toFixed(2)}`}</p>
      </div>
    </div>
 
    </>
  )
}

export default CartTotals