import React from "react";

function Card() {

    var data = [
        {name: 'Hare Krishna', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima?"},
        {name: 'Om namah Shivay', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima?"},
        {name: 'Jay shree Ganesh', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima?"},
        {name: 'Hare Ram', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima?"}

    ]

    const handleClickDownload = ()=>{alert("Downloading...") } 

    return(
        <div className="w-full h-screen bg-zinc-400 flex gap-10 justify-center items-center">
            {data.map((elem, index)=>(
                <div className="w-60 px-3 py-2 bg-zinc-100 rounded">
                <h3 className="font-semibold text-xl">{elem.name}</h3>
                <p className="text-xs mt-2">{elem.description}</p>
                <button onClick={handleClickDownload} className="px-2 py-1 bg-blue-400 text-xs rounded font-semibold text-zinc-100 mt-3">Download Now</button>
            </div>
            ))}
        </div>
    )

}

export default Card