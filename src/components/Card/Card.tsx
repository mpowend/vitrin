import urlFixer from '@/utils/urlFixer/urlFixer'
import {
  LazyLoadComponent,
  LazyLoadImage,
} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Card({
  src,
  cardText,
  to = '#',
}: {
  src: string
  cardText: string
  to?: string
}) {
  return (
    <div className="my-card mx-2 flex h-full min-w-[100px] cursor-pointer snap-start flex-col rounded-md">
      <a href={to}>
        <div className="flex h-full w-full flex-col">
          <div className="flex h-full w-full flex-1 flex-col text-gray-400">
            <LazyLoadImage
              effect="blur"
              id="card-image"
              src={urlFixer(src)}
              className="h-full w-full flex-1 rounded-xl object-cover"
              draggable="false"
            />
          </div>
          <div
            id="card-text"
            className=" line-clamp-2 text-right text-base font-medium text-gray-950"
          >
            {cardText}
          </div>
        </div>
      </a>
    </div>
  )
}

export default Card
