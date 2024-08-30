import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1724253380577-203d25af280f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Product",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, iusto",
      instock: true
    },
    {
      image:
        "http://images.unsplash.com/photo-1724253380577-203d25af280f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
      name: "Bakery Itmes",
      description:
        "lorem Ips dolod tempor invidunt ut labore et dolore mag nunc ed",
        instock: false
    },
    {
      image:
        "http://images.unsplash.com/photo-1724253380577-203d25af280f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
      name: "Shoes Listing",
      description:
        "lorem Ips dolod tempor invidunt ut labore et dolore mag nunc ed",
        instock: false
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div className=" w-52 bg-zinc-100 rounded-md overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-2">{elem.description}</p>
          </div>
          <button className={`px-4 py-1 ${elem.instock ? "bg-blue-500" : "bg-red-500"} text-xs rounded text-zinc-100`}>
            {elem.instock ? "In Stock" : "Out of Stock"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
