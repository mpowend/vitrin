import React from 'react'
type cardImageProps={
    src : string;
    height? :number;
    width? : number;
    alt? : string;
    caption : string;
}
function CardMedia({width , alt, height, caption ,src}:cardImageProps):React.ReactNode{
  return (
    <div className='w-full text-gray'>
        <img width={width} height={height} alt={alt} src={src} className={`rounded-xl`}/>
        <div>{caption}</div>
    </div>
  )
}

export default CardMedia