import CardSkeleton from './CardSkeleton.tsx'
import HolderSkeleton from './HolderSkeleton.tsx'
import ItemBarSkeleton from './ItemBarSkeleton.tsx'
import SliderSkeleton from './SliderSkeleton.tsx'

const LandingSkeleton = () => (
  <div className="mx-auto mt-[60px] flex max-w-[800px] flex-col gap-8 rounded-md bg-white px-8">
    <SliderSkeleton />
    <ItemBarSkeleton />
    <HolderSkeleton>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </HolderSkeleton>
    <ItemBarSkeleton />
    <HolderSkeleton>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </HolderSkeleton>
    <ItemBarSkeleton />
    <HolderSkeleton>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </HolderSkeleton>
    <ItemBarSkeleton />
    <HolderSkeleton>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </HolderSkeleton>
    <ItemBarSkeleton />
    <HolderSkeleton>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </HolderSkeleton>
  </div>
)

export default LandingSkeleton
