import generateRandomKey from '@/keyGenerator/keyGenerator.ts'
import SliderItem from './SliderItem.tsx'

function Slider() {
  const sliderImages: string[] = [
    'https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1689403625-photo144177861012515465.jpg?temp_url_expires=4733510400&temp_url_sig=be1fdd764f612101fc3390b95605fd349b3651c5',
    'https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1689658116-photo144150372971893303%20%284%29.jpg?temp_url_expires=4733510400&temp_url_sig=74c52b7d4e61fc34d7d042fc02d98fa6f58de6c7',
    'https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1689403473-photo144177861012525421.jpg?temp_url_expires=4733510400&temp_url_sig=3b6fefb2171003cb99aa5c7512ad3f4f12d06167',
  ]
  return (
    <div
      id="sliderContainer"
      className="no-scrollbar w-full snap-x snap-mandatory overflow-x-scroll whitespace-nowrap"
    >
      {sliderImages.map(sliderImage => (
        <SliderItem key={generateRandomKey()} src={sliderImage}></SliderItem>
      ))}
    </div>
  )
}

export default Slider
