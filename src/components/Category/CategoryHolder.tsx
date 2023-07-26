import React from 'react'

function CategoryHolder({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="categories"
      className="rtl mx-auto grid w-full grid-cols-4 grid-rows-2 place-items-center gap-2"
    >
      {children}
    </section>
  )
}

export default CategoryHolder
