import generateRandomKey from '@/keyGenerator/keyGenerator.ts'
import { useEffect, useRef, useState } from 'react'
import urlFixer from '@/urlFixer/urlFixer.ts'
import SlidersItem from './SlidersItem.tsx'

interface data {
  link: string
  ti: string
  im: string
}
function Sliders({
  nextAndPerv = true,
  sliderImages,
}: {
  nextAndPerv: boolean
  sliderImages: data[]
}) {
  const [current, setCurrent] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prevIndex => (prevIndex + 1) % sliderImages.length)
    }, 3000)

    return () => {
      clearInterval(timer)
    }
  }, [current, sliderImages.length])

  const prevImage = () => {
    setCurrent(prevIndex =>
      prevIndex === sliderImages.length
        ? 0
        : (prevIndex + 1) % sliderImages.length
    )
  }

  const nextImage = () => {
    setCurrent(prevIndex =>
      prevIndex === 0
        ? sliderImages.length - 1
        : (prevIndex - 1) % sliderImages.length
    )
  }
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const touchDistance = touchStartX.current - touchEndX.current

    if (touchDistance > 50) {
      setCurrent(prevIndex => (prevIndex + 1) % sliderImages.length)
    } else if (touchDistance < -50) {
      setCurrent(prevIndex =>
        prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
      )
    }
  }

  const handleMouseDown = (e: MouseEvent) => {
    touchStartX.current = e.clientX
  }

  const handleMouseMove = (e: MouseEvent) => {
    touchEndX.current = e.clientX
  }

  const handleMouseUp = () => {
    const touchDistance = touchStartX.current - touchEndX.current

    if (touchDistance > 50) {
      setCurrent(prevIndex => (prevIndex + 1) % sliderImages.length)
    } else if (touchDistance < -50) {
      setCurrent(prevIndex =>
        prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
      )
    }
  }

  return (
    <div
      className="relative overflow-hidden whitespace-nowrap"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {sliderImages.map(sliderImage => (
          <SlidersItem
            key={generateRandomKey()}
            src={urlFixer(sliderImage.im)}
          ></SlidersItem>
        ))}
      </div>
      {nextAndPerv ? (
        <div className="absolute inset-x-0 top-1/2 flex justify-between">
          <button
            onClick={prevImage}
            className="mr-2 rounded-lg bg-blue-500 px-4 py-2 text-white"
          >
            Prev
          </button>
          <button
            onClick={nextImage}
            className="ml-2 rounded-lg bg-blue-500 px-4 py-2 text-white"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Sliders
