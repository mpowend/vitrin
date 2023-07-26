import generateRandomKey from '@/keyGenerator/keyGenerator.ts'
import Holder from '../Holder/Holder.tsx'
import Card from '../Card/Card.tsx'

function RenderedList({
  items,
  title,
}: {
  items: [{ src: string; text: string }]
  title: string
}) {
  return (
    <Holder title={title}>
      {items.map(item => (
        <Card
          key={generateRandomKey()}
          cardText={item.text}
          src={item.src}
        ></Card>
      ))}
    </Holder>
  )
}

export default RenderedList
