import generateRandomKey from '@/utils/keyGenerator/keyGenerator.ts'
import urlFixer from '@/utils/urlFixer/urlFixer.ts'
import {
  LazyLoadImage,
  ScrollPosition,
  trackWindowScroll,
} from 'react-lazy-load-image-component'
import ImageHolder from '../ImageHolder/ImageHolder.tsx'
import 'react-lazy-load-image-component/src/effects/blur.css'
import CardSkeleton from '../skeletons/CardSkeleton.tsx'

interface data {
  link: string
  ti: string
  im: string
}
interface props {
  items: data[]
  title: string
  sp: ScrollPosition
}

function Banner({ items, sp }: props) {
  return (
    <ImageHolder length={items.length}>
      {items.map(item => (
        <a href={item.link} key={generateRandomKey()}>
          <div className="w-full text-center ">
            <LazyLoadImage
              src={urlFixer(item.im)}
              placeholder={<CardSkeleton></CardSkeleton>}
              alt={item.ti}
              className="h-full w-full object-cover"
              scrollPosition={sp}
            />
            <div>{items.length > 1 ? item.ti : null}</div>
          </div>
        </a>
      ))}
    </ImageHolder>
  )
}

export default Banner
