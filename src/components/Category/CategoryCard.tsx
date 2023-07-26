function Category({ src, title }: { src: string; title: string }) {
  return (
    <div className="mx-2 flex h-full w-full cursor-pointer snap-start flex-col rounded-[40px]">
      <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-[40px]">
        <div className="flex h-full w-full flex-1 flex-col rounded-[40px] text-gray-400">
          <img
            src={src}
            className="h-full w-full flex-1 rounded-xl object-cover transition duration-500 group-hover:blur-[2px]"
            loading="lazy"
          />
        </div>
        <div
          id="card-text"
          className="text-Gray-50 invisible absolute line-clamp-2 flex h-full w-full items-center justify-center rounded-[40px] bg-blue-600 bg-opacity-50 text-base font-medium text-white opacity-0 transition duration-500 ease-linear group-hover:visible group-hover:opacity-100"
        >
          {title}
        </div>
      </div>
    </div>
  )
}

export default Category
