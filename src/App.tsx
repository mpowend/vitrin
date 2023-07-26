import Footer from '@/components/Footer/Footer.tsx'
import api from '@/apis/api.ts'
import RenderedList from './components/renderLists/RenderedList.tsx'
import CategoryHolder from './components/Category/CategoryHolder.tsx'
import Category from './components/Category/CategoryCard.tsx'
import Header from './components/Header/Header.tsx'
import Slider from './components/Slider/Slider.tsx'
import generateRandomKey from './keyGenerator/keyGenerator.ts'

function App() {
  return (
    <div className="font-iranSans ">
      <Header />
      <div className="w-full bg-light-gray pb-5 pt-1">
        <main className="mx-auto mt-[60px] flex max-w-[800px] flex-col gap-8 rounded-md bg-white px-8">
          <Slider />
          <RenderedList items={api.cards1} title="برترین ها"></RenderedList>
          <CategoryHolder>
            {api.categories.map(category => (
              <Category
                key={generateRandomKey()}
                src={category.src}
                title={category.text}
              ></Category>
            ))}
          </CategoryHolder>
          <RenderedList items={api.cards2} title="برترین ها"></RenderedList>
          <img src="https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1689761697-%D9%86%DB%8C%D8%A7%D8%A8%D8%AA-%D8%B3%D9%82%D8%A7.png?temp_url_expires=4733510400&temp_url_sig=b44030d70c63ae5a8064b0650c9f8bbd87117802" />
          <RenderedList items={api.cards3} title=" عاشقانه "></RenderedList>
          <img src="https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1689761697-%D9%86%DB%8C%D8%A7%D8%A8%D8%AA-%D8%B3%D9%82%D8%A7.png?temp_url_expires=4733510400&temp_url_sig=b44030d70c63ae5a8064b0650c9f8bbd87117802" />
          <RenderedList items={api.cards4} title="فرهنگ و هنر"></RenderedList>
          <img src="https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1689761697-%D9%86%DB%8C%D8%A7%D8%A8%D8%AA-%D8%B3%D9%82%D8%A7.png?temp_url_expires=4733510400&temp_url_sig=b44030d70c63ae5a8064b0650c9f8bbd87117802" />
          <RenderedList items={api.cards5} title="رشد فردی"></RenderedList>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
