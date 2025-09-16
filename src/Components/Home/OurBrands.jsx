import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Images } from '../../assets/asset';

function OurBrands() {
  return (
    <>
   <section id='Brands' className='container-fluid'>
    <div className="container">
      <h4 className='text-center'>OUR TOP BRANDS</h4>
       <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      autoplay={{delay:2000}}
      speed={2000}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={Images.BrandImage1} alt="" height={' 120px'}/></SwiperSlide>
      <SwiperSlide><img src={Images.BrandImage2} alt=""  height={'120px'}/></SwiperSlide>
      <SwiperSlide><img src={Images.BrandImage3} alt=""  height={'120px'}/></SwiperSlide>
      <SwiperSlide><img src={Images.BrandImage4} alt=""  height={'120px'} /></SwiperSlide>
      <SwiperSlide><img src={Images.BrandImage5} alt=""  height={'120px'} /></SwiperSlide>
      <SwiperSlide><img src={Images.BrandImage6} alt=""  height={'120px'} /></SwiperSlide>
      <SwiperSlide><img src={Images.BrandImage7} alt=""  height={'120px'} /></SwiperSlide>
    
    </Swiper>
    </div>
   </section>
   
    </>
  )
}

export default OurBrands