import { useEffect } from 'react'
import useCarousel from './hooks/useCarousel'
import List from './components/List'
import ListItem from './components/ListItem'
import CarouselCore from 'components/CarouselCore'

const CarousolList = ({
  images,
  texts,
  className,
}: {
  images: string[]
  texts: string[]
  className?: string
}) => {
  const { activeIndex, dispatch } = useCarousel({ imageCount: images.length })
  let interval = 0
  const startTimer = () => {
    return setInterval(() => {
      dispatch({ type: 'next' })
    }, 4000)
  }
  useEffect(() => {
    interval = startTimer()
    return () => clearInterval(interval)
  }, [images.length, activeIndex, dispatch])

  return (
    <>
      <div className={`flex flex-row justify-center ${className}`}>
        <div className="w-4/6 h-[400px] relative overflow-hidden rounded-lg">
          <CarouselCore images={images} activeIndex={activeIndex} />
        </div>
        {/* <div className="absolute flex justify-center w-full mt-1">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 mx-1 rounded-full ${
              activeIndex.active === index ? 'bg-yellow' : 'bg-asphalt'
            }`}
            onClick={() => dispatch({ type: 'set', payload: index })}
          />
        ))}
      </div> */}
        <div className="w-1/6 h-full ml-4">
          <List
            onClick={index => {
              clearInterval(interval)
              interval = startTimer()
              dispatch({ type: 'set', payload: index })
            }}
            Items={images.map((_, index) => {
              return <ListItem image={images[index]} text={texts[index]} />
            })}
            selectedIndex={activeIndex.active}
          />
        </div>
      </div>
    </>
  )
}

export default CarousolList
