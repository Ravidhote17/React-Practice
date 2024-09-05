import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card(){
        
    return(
           <div className="w-full h-screen bg-zinc-200 flex justify-center items-center" >
                <div className=" relative w-60 h-40 bg-red-200 rounded overflow-hidden">
                    <img className={`shrink-0  w-full h-full object-cover `} src="https://images.unsplash.com/photo-1724689545475-67ff5bc78fac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <img className="shrink-0 -translate-x-[0%] w-full h-full object-cover" src="https://images.unsplash.com/photo-1724689545475-67ff5bc78fac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span onClick={()=>setInterval(()=>!val)} className="h-8 w-8 flex items-center justify-center rounded-full bg-[#dadada8b] absolute bottom-[5%] left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                    <FaArrowRightLong size={".7em"} />
                    </span>

                </div>

           </div>    
    )
}

export default Card

