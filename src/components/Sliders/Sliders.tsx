import generateRandomKey from '@/keyGenerator/keyGenerator.ts'
import { useEffect, useRef, useState } from 'react'
import SlidersItem from './SlidersItem.tsx'

function Sliders() {
  const sliderImages: string[] = [
    'https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1689403625-photo144177861012515465.jpg?temp_url_expires=4733510400&temp_url_sig=be1fdd764f612101fc3390b95605fd349b3651c5',
    'https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1689658116-photo144150372971893303%20%284%29.jpg?temp_url_expires=4733510400&temp_url_sig=74c52b7d4e61fc34d7d042fc02d98fa6f58de6c7',
    'https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1689403473-photo144177861012525421.jpg?temp_url_expires=4733510400&temp_url_sig=3b6fefb2171003cb99aa5c7512ad3f4f12d06167',
  ]
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
    console.log(current)
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
            src={sliderImage}
          ></SlidersItem>
        ))}
      </div>
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
    </div>
  )
}

export default Sliders
