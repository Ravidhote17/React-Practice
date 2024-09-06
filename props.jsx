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