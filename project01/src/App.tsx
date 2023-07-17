import 'App.css'
import Carousol from 'components/Carousel'
import Nav from 'components/Nav'
import CarouselImage1 from 'assets/carousel1.jpg'
import CarouselImage2 from 'assets/carousel2.jpg'
import CarouselImage3 from 'assets/carousel3.jpg'
function App() {
  return (
    <>
      <Nav items={['Home', 'Categories', 'Shop', 'About', 'Contact']} />
      <Carousol images={[CarouselImage1, CarouselImage2, CarouselImage3]} />
    </>
  )
}

export default App
