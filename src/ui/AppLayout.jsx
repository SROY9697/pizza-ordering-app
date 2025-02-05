/* eslint-disable no-unused-vars */
// import React from "react";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import SearchOrder from "../features/order/SearchOrder";

export default function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      {/* <SearchOrder /> */}
      {isLoading && <Loader />}  
      <div className="overflow-scroll">
      <main >
        {/* <h1>content </h1> */}
        <Outlet />
      </main>
      </div>
      <CartOverview />
    </div>
  );
}
