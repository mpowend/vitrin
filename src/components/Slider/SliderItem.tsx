function SliderItem({ src }: { src: string }) {
  return (
    <div className="sliderItem">
      <img draggable="false" src={src} />
    </div>
  )
}

export default SliderItem
