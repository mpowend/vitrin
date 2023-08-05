import React from 'react'
import { Link } from 'react-router-dom'

function Holder({
  title,
  children,
}: {
  title: string
  children: React.ReactNode[]
}) {
  return (
    <section className="rtl mx-auto flex w-full flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-row px-3">
        <div className="inline-block w-2/4" id="title">
          {title}
        </div>
        <div className="inline-block w-2/4 text-left" id="show-all-link">
          <Link to="/Category">نمایش همه</Link>
        </div>
      </div>

      {children}
    </section>
  )
}

export default Holder
