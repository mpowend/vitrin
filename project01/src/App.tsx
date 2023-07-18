import 'App.css'
import CarousolList from 'components/CarouselList'
import Nav from 'components/Nav'
import CarouselImage1 from 'assets/carousel1.jpg'
import CarouselImage2 from 'assets/carousel2.jpg'
import CarouselImage3 from 'assets/carousel3.jpg'
import Card from 'components/Card/Card'
import CardTitle from 'components/Card/Card-title/CardTitle'
import CardMedia from 'components/Card/CardMedia/CardMedia'
function App() {
  return (
    <>
      <Nav items={['Home', 'Categories', 'Shop', 'About', 'Contact']} />
      <CarousolList
        images={[CarouselImage1, CarouselImage2, CarouselImage3]}
        texts={['star', 'kill', 'death']}
      />
      <section className="flex">
        <Card dir="col" pointer>
          <CardMedia src={CarouselImage1} caption="price"></CardMedia>
          <CardTitle>this is a title</CardTitle>
        </Card>
      </section>
    </>
  )
}

export default App
