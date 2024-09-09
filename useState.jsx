// BASIC
import React, { useState } from "react";

function Card (){

    const [banned, setBanned] = useState(false);
    return(
        <div className="p-4">
            <h1>{banned.toString()}</h1>
            <button onClick={()=>setBanned(!banned)} className="px-3 py-1 mt-2 rounded texrt-xs bg-blue-500">Click Me!</button>
        </div>
    )
}

// INTERMEDIATE
import React from "react";
import { useState } from "react";

function Card() {

    const [val, setVal] = useState(12)

    return(
        <div className="p-4">
            <h1>{val}</h1>
            <button onClick={()=>setVal((prev)=>prev+1)} className="px-2 py-1 bg-blue-600 flex flex-col rounded mt-2">Increase</button>
            <button onClick={()=> setVal((prev)=>prev-1)} className="px-2 py-1 bg-blue-600 rounded mt-2">Decrease</button>
        </div>
    )

}

// ADVANCE (FOR STRINGS)
import React, { useState } from "react";

function Card(){

    const [val, setVal] = useState({name:"Ravi", isBanned:false});

    return(
        <div className="p-4">
            <h1>Name: {val.name}</h1>
            <h2>isBanned: {val.isBanned.toString()}</h2>
            <button onClick={()=>setVal({...val, isBanned: !val.isBanned})} className={`px-2 py-1 ${val.isBanned ? "bg-blue-500" : "bg-red-500"} rounded mt-2`}>Change</button>
        </div>
    )

}

// ADVANCE (REMOVAL IN ARRAYS)

// PART-1
import React, { useState } from "react";

function Card(){

    const [val, setVal] = useState([1,2,3,4,5,6])

    return(
        <div className="p-4">
            {val.map(item=><h1>{item}</h1>)}
            <button onClick={()=>setVal(()=>{
                return val.filter((items, index)=> index !=val.length-1)
            })} className="px-2 py-1 bg-blue-500 rounded flex flex-col mt-2">Remove</button>
        </div>
    )

}

// PART-2
import React, { useState } from "react";

function Card(){

    const [val, setVal] = useState([1,2,3,4,5,6])

    return(
        <div className="p-4">
            {val.map(item => <h1>{item}</h1>)}
            <button onClick={()=>setVal(()=>val.filter((item, index)=> index%2!==0))} className="px-2 py-1 bg-blue-500 rounded flex flex-col mt-2">Remove</button>
        </div>
    )

}
export default Card;    

// ADVANCE (ADDITION IN ARRAYS)

// PART-1
import React, { useState } from "react";

function Card(){

    const [val, setVal] = useState([1,2,3,4,5,6])

    return(
        <div className="p-4">
            {val.map(item => <h1>{item}</h1>)}
            <button onClick={()=>setVal([...val, 7])} className="px-2 py-1 bg-blue-500 rounded flex flex-col mt-2">Remove</button>
        </div>
    )

}
    
