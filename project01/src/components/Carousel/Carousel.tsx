import { useEffect } from 'react'
import useCarousel from './hooks/useCarousel'
import CarouselCore from 'components/CarouselCore/CarouselCore'

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
      <div className="w-full h-[500px] relative overflow-hidden">
        <CarouselCore images={images} activeIndex={activeIndex} />
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
