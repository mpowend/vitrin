function SlidersItem({ src }: { src: string }) {
  return (
    <img draggable="false" src={src} className="h-full w-full object-cover" />
  )
}

export default SlidersItem
