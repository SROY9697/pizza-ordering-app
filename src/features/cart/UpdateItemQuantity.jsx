/* eslint-disable react/prop-types */
// import React from 'react'

import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({pizzaId,quantity}) {
    const dispatch = useDispatch();

  return (
    <div  className="flex items-center gap-1 md:gap-3">
        <button onClick={()=>dispatch(decreaseItemQuantity(pizzaId))} className="bg-amber-400 transition-colors duration-200
        hover:bg-amber-200 rounded-full tracking-wide font-semibold uppercase py-1 px-2.5
        text-stone-800 inline-block cursor-pointer md:px-3.5 md:py-2 text-sm">-</button>
        <span className="font-bold">{quantity}</span>
        <button onClick={()=>dispatch(increaseItemQuantity(pizzaId))} className="bg-amber-400 transition-colors duration-200
        hover:bg-amber-200 rounded-full tracking-wide font-semibold uppercase py-1 px-2.5
        text-stone-800 inline-block cursor-pointer md:px-3.5 md:py-2 text-sm">+</button>
    </div>
  )
}

