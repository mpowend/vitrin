import React from 'react'
type props = {
    align : 'right'|'center'|'left';
    children : React.ReactNode;
}

function CardTitle({align, children}:props){
  return (
    <div
    className={`text-Gray-50 text-${align} text-2xl font-medium`}>{children}</div>
  )
}

export default CardTitle