import React from 'react'

const ListItem = ({ image, text }: { image: string; text: string }) => {
  return (
    <div className="flex flex-row justify-start p-4 align-center">
      <img className="object-cover w-8 h-12 rounded-lg" src={image} />
      <div className="w-full my-auto ml-2 text-center text-white align-middle line-clamp-2">
        {text}
      </div>
    </div>
  )
}

export default ListItem
