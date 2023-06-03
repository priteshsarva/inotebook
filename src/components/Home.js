import React, { useContext } from 'react'
import CardNotes from './CardNotes'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination,Navigation } from "swiper";


const Home = () => {
  return (
    <>
    <div className='d-flex align-items-center' style={{height: "80vh"}}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardNotes/>
        </SwiperSlide>
        <SwiperSlide>
          <CardNotes />
        </SwiperSlide>
        <SwiperSlide>
          <CardNotes />
        </SwiperSlide>
        <SwiperSlide>
          <CardNotes />
        </SwiperSlide>
        <SwiperSlide>
          <CardNotes />
        </SwiperSlide>
      </Swiper>
    </div>

    </>
  )
}

export default Home
