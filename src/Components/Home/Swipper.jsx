import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Images } from '../../assets/asset';
function Swipper() {
  return (
  <>
  <section id='swiper' className='container-fluid'>
    <div className="container">
       <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      autoplay={{delay:2000}}
      speed={2000}
      loop={true}
    >
      <SwiperSlide className='Swiper1'>
        <img src={Images.SwiperImg1} alt="" />
        <div className='Swiper1Content'>
          <h5>URBAN MUSE</h5>
          <h2>City Chic with a <br /> Feminine Twist</h2>
          <a href="" className='btn' id='swiperbtn'>SHOP NOW</a>
        </div>
      </SwiperSlide>
     
     <SwiperSlide className='Swiper1'>
        <img src={Images.SwiperImg1} alt="" />
        <div className='Swiper1Content'>
          <h5>URBAN MUSE</h5>
          <h2>City Chic with a <br /> Feminine Twist</h2>
          <a href="" className='btn' id='swiperbtn'>SHOP NOW</a>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  </section>
  
  </>
  )
}

export default Swipper