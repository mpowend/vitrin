import React from 'react'
type props = {
    align? : 'right'|'center'|'left';
    children : React.ReactNode;
    className? : string;
}

function CardTitle({align, children, className}:props){
  return (
    <div
    className={`text-Gray-50 text-${align} text-2xl font-medium ${className}`}>{children}</div>
  )
}

export default CardTitle