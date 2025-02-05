// import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-amber-500 uppercase px-4 py-3 border-b-2 border-stone-500 sm:px-8">
      <Link to="/" className="tracking-widest">
        Fast React 🍕Pizza🍕
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
