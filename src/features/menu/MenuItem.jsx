/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button"
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  //checking the quantity of a particular pizza in a cart
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  //quantity of a particular pizza in a cart if more than 0
 const isInCart = currentQuantity > 0 ;

  function handleAddToCart() {
    console.log(id);
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    }
  dispatch(addItem(newItem));
  console.log(newItem);
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? "opacity-65 grayscale" : ""}`}/>
      <div className="flex flex-col grow pt-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize text-slate-500">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-400">Sold out</p>}

        { isInCart && 
        <div className="flex items-center gap-3 sm:gap-6">
          <UpdateItemQuantity pizzaId={id} quantity={currentQuantity}/>
          <button onClick={()=>dispatch(deleteItem(id))} className="bg-amber-400 transition-colors duration-200
           hover:bg-amber-200 rounded-full tracking-wide font-semibold uppercase py-2 px-4
            text-stone-800 inline-block cursor-pointer md:px-5 md:py-2.5 text-xs">delete</button>
        </div>
        }

          {!soldOut && !isInCart && <button onClick={handleAddToCart} className="bg-amber-400 transition-colors duration-200
    hover:bg-amber-200 rounded-full tracking-wide font-semibold uppercase py-2 px-4
     text-stone-800 inline-block cursor-pointer md:px-5 md:py-2.5 text-xs">Add to cart</button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem; 
