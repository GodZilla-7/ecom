import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Box from './Box';

import { Pagination } from 'swiper/modules';
function Hero() {
  return (
    <div className='mt-28'>

  <div>
    <div className="bg-green-100 flex items-center justify-center p-1 m-4 text-green-700 rounded-xl">
      <span className='mr-2'> 1,00,000+</span> <span className="bg-green-700 rounded-2xl text-sm text-green-100 pl-2 pr-2 "> HAPPY CUSTOMERS </span>
    </div>
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 1, // 1 image on mobile devices (screen width < 640px)
        },
        1024: {
          slidesPerView: 2, // 2 images on larger screens (screen width >= 1024px)
        },
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/c1.webp" className="w-full object-cover" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/c2.webp" className="w-full object-cover" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/c1.webp" className="w-full object-cover" alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/c2.webp" className="w-full object-cover" alt="Slide 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/c1.webp" className="w-full object-cover" alt="Slide 5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/c2.webp" className="w-full object-cover" alt="Slide 6" />
      </SwiperSlide>
    </Swiper>
  </div>

<div className='flex items-center justify-around gap-4 m-4'>
<Box/>
<Box/>
<Box/>

</div>
</div>

  
  );
}


export default Hero;


