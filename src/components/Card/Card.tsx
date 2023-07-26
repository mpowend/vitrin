function Card({ src, cardText }: { src: string; cardText: string }) {
  return (
    <div className="mx-2 flex h-full min-w-[100px] cursor-pointer snap-start flex-col rounded-md">
      <div className="flex h-full w-full flex-col">
        <div className="flex h-full w-full flex-1 flex-col text-gray-400">
          <img
            id="card-image"
            src={src}
            className="h-full w-full flex-1 rounded-xl object-cover"
            loading="lazy"
          />
        </div>
        <div
          id="card-text"
          className=" line-clamp-2 text-right text-base font-medium text-gray-950"
        >
          {cardText}
        </div>
      </div>
    </div>
  )
}

export default Card
