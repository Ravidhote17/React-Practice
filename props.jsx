// APP.JSX

import React from "react"
import Card from "./components/Card"

function App(){

  return (
    <div>
      <Card text="Know More" color="bg-blue-400"/>
      <Card text="Download" color="bg-red-400"/>
    </div>
)
}

export default App

// ----------------------CARD.JSX---------------------------------


import React from "react";

function Card({text, color}){

    return(
        <>
            <button className= {`${color} px-3 py-2 m-2 rounded`} >{text}</button>
        </>
    )

}

export default Card;
// ---------------------------------------------------------------------------
// --------------------------------------------------------------------------


//------------------- APP.JSX

import React from "react"
import Card from "./components/Card"

function App(){

  const data = [
    {name:"Ravi", professsion:"Painter", image:"https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Ritik", professsion:"Carpainter", image:"https://images.unsplash.com/photo-1519713958759-6254243c4a53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"ujjwal", professsion:"Teacher", image:"https://images.unsplash.com/photo-1526306525210-b5094a17e223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"vishal", professsion:"Driver", image:"https://plus.unsplash.com/premium_photo-1664451177475-a8a9b2fc3aa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"}
]

  return (
    <div>
      <div className="w-full h-screen bg-zinc-300 gap-4 flex items-center justify-center">
        {data.map((item, index)=>(
          <Card image={item.image} name={item.name} professsion={item.professsion}/>
        )) } 
      </div>
      {/* <Card name="Rahul"/> */}
    </div>
)
}


export default App


//----------------- CARD.JSX
import React from "react";

function Card({image, name, professsion}){
    
    return(
        <div className="w-52 bg-white rounded-md overflow-hidden">
            <div className="w-full h-32 bg-sky-300">
                <img className="w-full h-full object-cover" src= {image} alt="" />
            </div>
            <div className="w-full p-3">
                <h3 className="text-xl font-semibold">{name}</h3>
                <h5 className="text-xs">{professsion}</h5>
                <button onClick={()=>alert("Request Sent")} className="px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded">Add Freind</button>
            </div>
        </div>
    )

}

export default Card;