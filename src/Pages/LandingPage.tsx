import splusLandingRequest from '@/apis/splusLandingRequest.ts'
import Banner from '@/components/Banner/Banner.tsx'
import Footer from '@/components/Footer/Footer.tsx'
import Header from '@/components/Header/Header.tsx'
import Sliders from '@/components/Sliders/Sliders.tsx'
import RenderedList from '@/components/renderLists/RenderedList.tsx'
import LandingSkeleton from '@/components/skeletons/LandingSkeleton.tsx'
import generateRandomKey from '@/keyGenerator/keyGenerator.ts'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function LandingPage({ id }: { id?: number }) {
  const { landing_id } = useParams()
  const [data, setData] = useState(null)
  const getData = async id => {
    const result = await splusLandingRequest(id)
    setData(result)
  }
  function getParameterValue(url: string, parameter: string) {
    const searchParams = new URLSearchParams(new URL(url).search)
    return searchParams.get(parameter)
  }
  useEffect(() => {
    if (id) {
      getData(id)
    } else {
      getData(landing_id)
    }
  }, [])

  const chooseElement = row => {
    switch (row.ty) {
      case 'SLIDER':
        return (
          <Sliders
            nextAndPerv={false}
            sliderImages={row.items}
            key={generateRandomKey()}
          />
        )
      case 'CATEGORY':
        return (
          <RenderedList
            items={row.items}
            title={row.ti}
            key={generateRandomKey()}
          ></RenderedList>
        )
      case 'ITEM_BAR':
        return <Banner items={row.items} key={generateRandomKey()} />
      default:
        break
    }
  }

  return (
    <div className="font-iranSans ">
      <Header />
      <div className="w-full bg-light-gray pb-5 pt-1">
        <main className="mx-auto mt-[60px] flex max-w-[800px] flex-col gap-8 rounded-md bg-white px-8">
          {data ? (
            data.rows.map(row => chooseElement(row))
          ) : (
            <LandingSkeleton />
          )}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
