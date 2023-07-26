import React from 'react'

function Holder({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rtl mx-auto flex w-full flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-row px-3">
        <div className="inline-block w-2/4" id="title">
          {title}
        </div>
        <div className="inline-block w-2/4 text-left" id="show-all-link">
          نمایش همه
        </div>
      </div>
      <div className="no-scrollbar flex w-full snap-x snap-mandatory justify-between gap-2 overflow-x-auto px-3 py-2">
        {children}
      </div>
    </section>
  )
}

export default Holder
