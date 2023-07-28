// src/components/Carousel.js
import { useState, useEffect } from 'react'
// { images }: { images: string[] }
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  //   const [nextImageIndex, setNextImageIndex] = useState(1)
  const sliderImages: string[] = [
    'https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1689403625-photo144177861012515465.jpg?temp_url_expires=4733510400&temp_url_sig=be1fdd764f612101fc3390b95605fd349b3651c5',
    'https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1689658116-photo144150372971893303%20%284%29.jpg?temp_url_expires=4733510400&temp_url_sig=74c52b7d4e61fc34d7d042fc02d98fa6f58de6c7',
    'https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1689403473-photo144177861012525421.jpg?temp_url_expires=4733510400&temp_url_sig=3b6fefb2171003cb99aa5c7512ad3f4f12d06167',
  ]

  const nextImageIndex = (currentImageIndex + 1) % sliderImages.length
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % sliderImages.length)
    }, 3000) // Auto-slide every 3 seconds

    return () => clearInterval(interval)
  }, [sliderImages.length])

  const prevImage = () => {
    setCurrentImageIndex(
      prevIndex => (prevIndex - 1 + sliderImages.length) % sliderImages.length
    )
  }

  const nextImage = () => {
    setCurrentImageIndex(
      prevIndex => (prevIndex - 1 + sliderImages.length) % sliderImages.length
    )
  }

  return (
    <div className="relative">
      <div className="relative flex h-[400px] w-full overflow-hidden">
        {sliderImages.map(
          (image, index) =>
            (currentImageIndex == index || nextImageIndex == index) && (
              <div
                key={index}
                className={`absolute left-0 top-0 h-full w-full transition duration-[3000ms] ease-in-out ${
                  index === currentImageIndex ? 'z-10 translate-x-full' : ''
                } `}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="h-auto w-full"
                />
              </div>
            )
        )}
      </div>
      <div className="absolute inset-x-0 top-1/2 flex justify-center">
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

export default Carousel
