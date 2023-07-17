import React from 'react'
type props = {
    // width : number;
    // height : number;
    pointer : boolean;
    dir : "col" | "row"
    children : React.ReactNode;
    style : string
}

const Card:React.FC<props> =({pointer , style , dir , children})=>{
  return (
    <div
    className={`flex ${dir === "col"?"flex-col":"flex-row"} bg-black ${pointer &&"cursor-pointer bg"} p-4 border-2 rounded-md max-w-md overflow-hidden`}>
        {children}
    </div>
  )
}

export default Card