import React from 'react'

function ImageHolder({
  length,
  children,
}: {
  children: React.ReactNode
  length: number
}) {
  return (
    <section
      id="categories"
      className={`rtl mx-auto grid w-full grid-rows-1 place-items-center gap-2 ${
        length === 4 ? 'grid-cols-4' : 'grid-cols-1'
      }`}
    >
      {children}
    </section>
  )
}

export default ImageHolder
