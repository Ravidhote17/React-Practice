// APP.JSX
import React, { useState } from "react";
import Card from "./components/Card"
import Navbar from "./components/Navbar"

function App(){

    const data = [
        {song: "Tere naam", artist: "Sallu bhai", image:"https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", added: false},
        {song: "Saiyyan", artist: "Kailash kher", image:"https://plus.unsplash.com/premium_photo-1671822689857-9141c5de8813?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8", added: false},
        {song: "Challenger", artist: "Gulshan Kumar", image:"https://images.unsplash.com/photo-1627140396257-cd24aa8173ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D", added: false},
        {song: "One Love", artist: "Shubh", image:"https://images.unsplash.com/photo-1725610147248-4f20f7b13999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8", added: false},
        {song: "Loser", artist: "Dino James", image:"https://images.unsplash.com/photo-1725638265979-4ff4b828ed5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D", added: false},        
    ]

    const [songData, setSongData] = useState(data)

    const handleClick = (index)=>{
        setSongData((prev)=>{
            return prev.map((item, itemIndex)=>{
                if(itemIndex === index) return {...item, added: !item.added}
                return item
            })
        })
    }

    return(
        <div>
            <Navbar data={songData}/>
            <div className="px-20 flex flex-wrap gap-10 mt-20">
                {songData.map((obj, index)=>{
                    return <Card data={obj} handleClick={handleClick} index={index} key={index}/>
                })}
            </div>
        </div>
    )

}

export default App;

// ---------------------------------------------------------------------

// NAVBAR.JSX

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Navbar({data}){

    return(
        <div className="w-full px-14 py-5 bg-red500 flex justify-between item-center">
            <h3>Music Studio</h3>
            <div className="flex bg-orange-600 p-2 px-4 text-white rounded-md text-sm gap-2">
                <h3>Favourites</h3>
                <h4>{data.filter(item => item.added).length}</h4>
            </div>
        </div>

    )

}

export default Navbar

// --------------------------------------------------------

// CARD.JSX

import React from "react";

 function Card({data, handleClick, index}){

   const {song, artist, image, added} = data;

   return(
      <div className="w-60 bg-zinc-200 p-4 rounded-md flex gap-4 pb-10 relative mt-10">
         <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
            <img className="w-full h-full object-cover " src={image} alt="" />
         </div>
         <div>
            <h3 className="text-xm leading-none font-semibold whitespace-nowrap">{song}</h3>
            <h6 className="text-sm">{artist}</h6>
         </div>
         <button onClick={()=>handleClick(index)} className= {`px-4 py-2 ${added===false ? "bg-orange-600" : "bg-green-600"} absolute text-white text-xs whitespace-nowrap -translate-x-[50%] translate-y-[50%] left-1/2 rounded-full bottom-0`}>{added===false ? "Add to Favourites" : "Added"}</button>
      </div>

   )
 }

 export default Card;