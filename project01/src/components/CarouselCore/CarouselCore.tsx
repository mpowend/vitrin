import React from 'react'

const CarouselCore = ({
  images,
  activeIndex,
}: {
  images: string[]
  activeIndex: { active: number; prev: number }
}) => {
  return (
    <>
      <div
        key={activeIndex.prev + 'bg'}
        className={`absolute top-0 left-0 z-10 w-full h-full  ${
          activeIndex.prev != -1 ? 'opacity-100 animate-slide' : 'opacity-0'
        }`}
      >
        <img
          src={images[activeIndex.prev]}
          className="object-cover w-full h-full blur-sm"
          alt="carousel"
        />
      </div>
      <div
        key={activeIndex.prev + 'image'}
        className={`absolute top-0 left-0 z-20 w-full h-full  ${
          activeIndex.prev != -1 ? 'opacity-100 animate-slide' : 'opacity-0'
        }`}
      >
        <img
          src={images[activeIndex.prev]}
          className="relative object-contain w-full h-full"
          alt="image"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 w-full h-full opacity-100">
        <img
          src={images[activeIndex.active]}
          className="object-cover w-full h-full blur-sm"
          alt="carousel"
        />
      </div>{' '}
      <div className="absolute top-0 left-0 z-0 w-full h-full opacity-100">
        <img
          src={images[activeIndex.active]}
          className="absolute top-0 z-0 object-contain w-full h-full"
          alt="image"
        />
      </div>
    </>
  )
}

export default CarouselCore
