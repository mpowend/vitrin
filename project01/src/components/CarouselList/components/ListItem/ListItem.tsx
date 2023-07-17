import React from 'react'

const ListItem = ({ image, text }: { image: string; text: string }) => {
  return (
    <div className="flex flex-row justify-start p-4 align-center">
      <img className="object-cover w-8 h-12 rounded-lg" src={image} />
      <div className="ml-2 text-white">{text}</div>
    </div>
  )
}

export default ListItem
