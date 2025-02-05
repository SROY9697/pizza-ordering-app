/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart"


function Cart() {
  const cart = useSelector(state=>state.cart.cart);
  const username = useSelector(state=>state.user.username);
  const dispatch = useDispatch();

  if(cart.length === 0)
  return <EmptyCart />

  return (
    <div className="py-3 px-3">
      <LinkButton to="/menu" >&larr; Back to menu</LinkButton>

      <h2 className="mt-6 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-4 divide-y divide-stone-200 border-b">
        {
          cart.map(item => <CartItem item={item} key={item.pizzaId}/>)
        }
      </ul>

      <div className="mt-6 space-x-3">
        <Button to="/order/new">Order pizzas</Button>
        {/* <Link to="/order/new">Order pizzas</Link> */}

        <button onClick={()=>dispatch(clearCart())} className="inline-block text-sm rounded-full border-2
         border-stone-300 font-semibold uppercase tracking-wide text-stone-400
          transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800
           focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring
            focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5">Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
