import { useEffect } from 'react'
import useCarousel from './hooks/useCarousel'

const Carousol = ({ images }: { images: string[] }) => {
  const { activeIndex, dispatch } = useCarousel({ imageCount: images.length })
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex.userSet) {
        dispatch({ type: 'userSetReset' })
      } else {
        dispatch({ type: 'next' })
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length, activeIndex, dispatch])

  return (
    <>
      <div className="w-full h-[500px] relative">
        <div
          key={activeIndex.prev + 'bg'}
          className={`absolute top-0 left-0 z-10 w-full h-full bg-black ${
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
          className={`absolute top-0 left-0 z-20 w-full h-full bg-black ${
            activeIndex.prev != -1 ? 'opacity-100 animate-slide' : 'opacity-0'
          }`}
        >
          <img
            src={images[activeIndex.prev]}
            className="relative object-contain w-full h-full"
            alt="image"
          />
        </div>
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-black opacity-100">
          <img
            src={images[activeIndex.active]}
            className="object-cover w-full h-full blur-sm"
            alt="carousel"
          />
        </div>
        <img
          src={images[activeIndex.active]}
          className="absolute top-0 z-0 object-contain w-full h-full"
          alt="image"
        />
      </div>
      <div className="absolute flex justify-center w-full mt-1">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 mx-1 rounded-full ${
              activeIndex.active === index ? 'bg-yellow' : 'bg-asphalt'
            }`}
            onClick={() => dispatch({ type: 'set', payload: index })}
          />
        ))}
      </div>
    </>
  )
}

export default Carousol
