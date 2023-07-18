import React from 'react'
type cardImageProps={
    src : string;
    height? :number;
    width? : number;
    alt? : string;
    caption : string;
    className? : string;
}
function CardMedia({width , alt, height, caption ,src ,className}:cardImageProps):React.ReactNode{
  return (
    <div className={`w-full h-full text-gray-400 flex flex-col ${className}`}>
        <img width={width} height={height} alt={alt} src={src} className={`h-full rounded-xl w-full flex-1 object-cover`}/>
        <div>{caption}</div>
    </div>
  )
}

export default CardMedia