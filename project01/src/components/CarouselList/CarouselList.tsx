import { useEffect } from 'react'
import useCarousel from './hooks/useCarousel'
import List from './components/List/List'
import ListItem from './components/ListItem/ListItem'

const Carousol = ({ images, texts }: { images: string[]; texts: string[] }) => {
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
      <div className="flex flex-row justify-center">
        <div className="w-4/6 h-[400px] relative overflow-hidden rounded-lg">
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
          </div>{' '}
          <div className="absolute top-0 left-0 z-0 w-full h-full bg-black opacity-100">
            <img
              src={images[activeIndex.active]}
              className="absolute top-0 z-0 object-contain w-full h-full"
              alt="image"
            />
          </div>
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

export default Carousol
