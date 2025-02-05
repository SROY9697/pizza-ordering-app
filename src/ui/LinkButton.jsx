/* eslint-disable react/prop-types */
// import React from 'react'

import { Link,useNavigate } from "react-router-dom";

export default function LinkButton({children, to}) {
    const navigate = useNavigate();
    if(to==="-1")
    return  <button onClick={() => navigate(-1)} className=" text-sm text-blue-400 hover:underline hover:text-blue-600">{children}</button>
  return (
    <Link to={to} className=" text-sm text-blue-400 hover:text-blue-600 hover:underline">{children}</Link>
  )
}
 