import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Images } from '../../assets/asset';
function Blog() {
  return (
    <>
    
    <section id='Blog' className='container-fluid'>
      <div className="container">
        <h4 className='text-center'>BLOG & INSIGHTS</h4>
         <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      autoplay={{delay:2000}}
      spedd={2000}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
   className='mt-5' >
      <SwiperSlide>
      <div className="card" id='BlogCard'>
        <img src={Images.BlogImg1} alt=""/>
        <div className="card-body">
           <p>ByadminDecember 19, 2023</p>
          <h4>Dress to Impress: A Guide to Power Dressing for Success</h4>
         </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card" id='BlogCard'>
          <img src={Images.BlogImg2} alt="" />
          <div className="card-body">
          <p>ByadminDecember 19, 2023</p>
          <h4>Unveling Elegance: Timeless Fashion Trends For Men</h4>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card" id='BlogCard'>
          <img src={Images.BlogImg3} alt="" />
          <div className="card-body">
          <p>ByadminDecember 19, 2023</p>
          <h4>Fashion Forward: Emerging Trends You Nedd To Know</h4>
          </div>
        </div>
      </SwiperSlide>
     
    
    </Swiper>
      </div>
    </section>
    
    </>
  )
}

export default Blog