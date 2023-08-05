import { useEffect, useRef, useState } from 'react'
import generateRandomKey from '@/utils/keyGenerator/keyGenerator.ts'
import Holder from '../Holder/Holder.tsx'
import Card from '../Card/Card.tsx'

interface data {
  link: string
  ti: string
  im: string
}
function RenderedList({ items, title }: { items: data[]; title: string }) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const listHolderRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const container = listHolderRef.current
    const rootWidth = container.offsetWidth
    const itemWidth = (
      container?.querySelectorAll('.my-card')[0] as HTMLDivElement
    ).offsetWidth
    const rootMargin = (rootWidth - itemWidth) / 2
    container.scrollLeft = rootMargin
    console.log(`0px ${-rootMargin}px 0px ${-rootMargin}px`)

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        observer.unobserve(container)
      },
      {
        root: container,
        rootMargin: `0px 100px 0px 100px`,
        threshold: [0.51], // Adjust this threshold value as needed based on your UI requirements
      }
    )
    console.log(isIntersecting)

    observer.observe(container)
    return () => {
      if (listHolderRef) {
        observer.unobserve(container)
      }
    }
  })
  console.log(isIntersecting)
  return (
    <Holder title={title}>
      <div
        className="no-scrollbar flex w-full snap-x snap-mandatory justify-between gap-2 overflow-x-auto px-3 py-2"
        ref={listHolderRef}
      >
        {items.map(item => (
          <Card
            key={generateRandomKey()}
            cardText={item.ti}
            src={item.im}
          ></Card>
        ))}
      </div>
    </Holder>
  )
}

export default RenderedList
