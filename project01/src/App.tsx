import 'App.css'
import Carousol from 'components/Carousel_basic'
import Nav from 'components/Nav'
function App() {
  return (
    <>
      <Nav items={['Home', 'Categories', 'Shop', 'About', 'Contact']} />
      <Carousol
        images={[
          'https://picsum.photos/200/320',
          'https://picsum.photos/200/300',
          'https://picsum.photos/200/340',
        ]}
      />
    </>
  )
}

export default App
