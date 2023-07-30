function CardSkeleton() {
  return (
    <div className="mx-2 flex h-[120px] w-[100px]  cursor-pointer flex-col rounded-md">
      <div className="flex h-4/5 w-full  animate-pulse flex-col rounded-md bg-slate-400"></div>
      <div className="mt-1 h-fit w-full animate-pulse rounded-md bg-slate-400 text-right text-base font-medium text-transparent">
        a
      </div>
    </div>
  )
}

export default CardSkeleton
