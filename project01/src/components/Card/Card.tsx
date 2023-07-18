import React from 'react'
type props = {
  // width : number;
  // height : number;
  pointer: boolean
  dir: 'col' | 'row'
  children: React.ReactNode
  border?: boolean
  className?: string
}

const Card: React.FC<props> = ({
  pointer,
  dir,
  children,
  border = false,
  className,
}) => {
  return (
    <div
      className={`flex ${dir === 'col' ? 'flex-col' : 'flex-row'} ${
        pointer && 'cursor-pointer bg'
      } ${!!border && 'p-4 border-2'} rounded-md ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
