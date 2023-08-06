import Card from '@/components/Card/Card.tsx'
import generateRandomKey from '@/utils/keyGenerator/keyGenerator.ts'

interface item {
  ti: string
  im: string
  link: string
}
function CategoryPage({ items }: { items: item[] }) {
  return (
    <div className="flex flex-wrap justify-center px-3">
      {items.map(item => (
        <Card
          cardText={item.ti}
          src={item.im}
          to={item.link}
          key={generateRandomKey()}
        ></Card>
      ))}
    </div>
  )
}

export default CategoryPage
