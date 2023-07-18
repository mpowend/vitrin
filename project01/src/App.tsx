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
      <main className="flex flex-col items-center w-full p-4 mt-8">
        <CarousolList
          images={[CarouselImage1, CarouselImage2, CarouselImage3]}
          texts={[
            'NeverWinter Nights diamond edition',
            "Sid Meier's Alpha Centauri",
            'Evil Within 2',
          ]}
          className="w-10/12 max-w-6xl min-w-[520px]"
        />
        {/* <section className="flex">
          <Card dir="col" pointer>
            <CardMedia src={CarouselImage1} caption="price"></CardMedia>
            <CardTitle>this is a title</CardTitle>
          </Card>
        </section> */}
        <section className="flex flex-col w-full max-w-6xl min-w-[520px] mt-8 h-fit">
          <h1 className="w-[520px] text-2xl mb-2">Games on Sale {'>'}</h1>
          <div className="flex flex-row w-full max-w-6xl min-w-[520px] h-[350px] max-lg:h-[200px] gap-4">
            {[
              {
                image:
                  'https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/646338d907e21d859be3436d5df50675.jpg',
                desc: '5$',
                text: 'Blasphemous',
              },
              {
                image:
                  'https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/c936104a5e65ff083438512401a30cf4.jpg',
                desc: '3.99$',
                text: 'Space Heaven',
              },
              {
                image:
                  'https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/49e0a9e067bcfe39aee5f7490be1723a.jpg',
                desc: '4.99$',
                text: 'Secret Agent clank',
              },
              {
                image:
                  'https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/72d0eaa80cc3412fda4a133ca1f884e8.jpg',
                desc: '24.99$',
                text: 'God of War',
              },
              {
                image:
                  'https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/029f85e308661cc1611ca6c444a77bab.jpg',
                desc: '19.99$',
                text: 'Ratchet and clank',
              },
            ].map((item, index) => {
              return (
                <Card dir="col" pointer className="h-full w-[200px]">
                  <div className="flex flex-col w-full h-full">
                    <CardMedia
                      src={item.image}
                      caption={item.desc}
                      className="flex-1"
                    ></CardMedia>
                    <CardTitle className="text-base">{item.text}</CardTitle>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>
        <section className="flex flex-col w-full max-w-6xl min-w-[520px] mt-8">
          <h1 className="mb-2 text-2xl">Events {'>'}</h1>
          <div className="flex flex-row w-full min-w-[520px] max-lg:flex-col gap-4">
            {[
              {
                image:
                  'https://cdn2.unrealengine.com/egs-remnant-2-breaker-v2-1920x1080-a0c87a393f73.jpg?h=480&quality=medium&resize=1&w=854',
                desc: 'Remnant II',
                text: 'Survive against new deadly creatures and god-like bosses across terrifying worlds.',
              },
              {
                image:
                  'https://cdn2.unrealengine.com/egs-genshin-impact-3-8-breaker-2560x1440-ba1238c614eb.jpg?h=480&quality=medium&resize=1&w=854',
                desc: 'Genshin Impact - Version 3.8',
                text: 'Join Klee and Kaeya for a summer getaway with new outfits and an exciting discovery of an uncharted land!',
              },
            ].map((item, index) => {
              return (
                <Card dir="col" pointer className="w-1/2 h-full max-lg:w-full">
                  <div className="flex flex-col w-full h-full">
                    <CardMedia
                      src={item.image}
                      caption={item.desc}
                      className="flex-1"
                    ></CardMedia>
                    <CardTitle className="text-base">{item.text}</CardTitle>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center bg-lightBlack">
        <section className="max-w-6xl min-w-[520px]">
          <hr className="mt-4 border-lighterBlack" />
          <div className="flex flex-col w-1/2 max-lg:w-full h-[350px] p-10 text-gray-300 text-sm justify-evenly">
            <p>
              © 2023, Epic Games, Inc. All rights reserved. Epic, Epic Games,
              the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal
              Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal
              Tournament logo are trademarks or registered trademarks of Epic
              Games, Inc. in the United States of America and elsewhere. Other
              brands or product names are the trademarks of their respective
              owners. Terms of ServicePrivacy PolicyStore Refund Policy
            </p>
            <div className="flex flex-row gap-4">
              {[
                'Terms of Service',
                'Privacy Policy',
                'Store Refund Policy',
              ].map(item => (
                <a href="#">{item}</a>
              ))}
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default App
