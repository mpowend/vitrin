import React, { ReactNode } from 'react'

function CardContent({children}:{children:ReactNode}):React.ReactNode{
  return (
    <div className='text-gray text-sm'>{children}</div>
  )
}

export default CardContent