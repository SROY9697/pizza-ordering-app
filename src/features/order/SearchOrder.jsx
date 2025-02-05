/* eslint-disable no-unused-vars */
// import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by Order-ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full bg-amber-100 px-3 py-3 focus:outline-none focus:ring focus:ring-amber-300 text-sm
        placeholder:text-stone-400	sm:w-64 sm:focus:w-72 transition-all duration-300"
      />
    </form>
  );
}
