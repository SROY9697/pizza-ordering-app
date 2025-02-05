/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  //calling getTotalCartPrice func to calculate total cart items
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if(totalCartQuantity === 0)
  return null;

  return (
    <div className="flex items-center justify-between	 bg-stone-600 text-stone-300 uppercase px-4 py-4 sm:px-8">
      <p className="text-slate-300 text-sm  md:text-base font-semibold space-x-4 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
