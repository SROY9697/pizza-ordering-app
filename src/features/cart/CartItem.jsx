/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  // const cart = useSelector(state=>state.cart.cart);

  return (
    <li className="py-3 sm:flex sm:justify-between sm:items-center">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="font-bold text-sm">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} quantity={quantity}/>
        <button onClick={()=>dispatch(deleteItem(pizzaId))} className="bg-amber-400 transition-colors duration-200
    hover:bg-amber-200 rounded-full tracking-wide font-semibold uppercase py-2 px-4
     text-stone-800 inline-block cursor-pointer md:px-5 md:py-2.5 text-xs">delete</button>
      </div>
    </li>
  );
}

export default CartItem;
 


