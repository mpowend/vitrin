import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const Carousol = ({ images }: { images: string[] }) => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        speed={500}
        loop={true}
        touchRatio={1.5}
        navigation={true}
        effect={'flip'}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {images.map(image => {
          return (
            <SwiperSlide>
              <img src={image} alt="index" className="slide-image" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Carousol
