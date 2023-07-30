import React from 'react'

function HolderSkeleton({ children }: { children: React.ReactNode }) {
  return (
    <section className="rtl mx-auto flex w-full flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-row px-3">
        <div className="inline-block w-2/4" id="title">
          <div className="h-8 w-40 animate-pulse bg-slate-400"></div>
        </div>
        <div className="inline-block w-2/4 text-left" dir="ltr">
          <div className="h-8 w-40 animate-pulse bg-slate-400"></div>
        </div>
      </div>
      <div className="no-scrollbar flex w-full justify-between gap-2 overflow-x-auto px-3 py-2">
        {children}
      </div>
    </section>
  )
}

export default HolderSkeleton
