/* eslint-disable react/prop-types */
// import React from 'react'

import { Link } from "react-router-dom"

export default function Button({children,disabled,to}) {
  if(to){
    return <Link to={to} className="bg-amber-400 transition-colors duration-200
    hover:bg-amber-200 rounded-full tracking-wide font-semibold uppercase py-3 px-3
     text-stone-800 inline-block cursor-pointer md:px-6 md:py-4">{children}</Link>
  }
  return (
    <button disabled={disabled} className="bg-amber-400 transition-colors duration-200
    hover:bg-amber-200 rounded-full tracking-wide font-semibold uppercase py-3 px-3
     text-stone-800 inline-block cursor-pointer md:px-6 md:py-4">
        {children}
    </button>
  )
}
