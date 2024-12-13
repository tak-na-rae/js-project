import React from 'react';

import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Today = () => {
  return (
    <>

      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        effect='coverflow'
        grabCursor={true}
        // touchRatio={0}
        // mousewheel={true}
    	  // keyboard={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={20} 
        slidesPerView={4}
        pagination={{ clickable: true }}
        navigation={true}
        // navigation={{
        //   prevEl: '.swiper-prev',
        //   nextEl: '.swiper-next',
        // }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        // style={{ cursor: 'grab' }}
      //   breakpoints={{
      //     100: {
      //         slidesPerView: 1,
      //             spaceBetween: 25
      //       },
      //       880: {
      //             slidesPerView: 2,
      //         spaceBetween: 25
      //       },
      //       1280: {
      //         slidesPerView: 3,
      //         spaceBetween: 25
      // }}}
        className="mySwiper"
      >
      <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide1.jpg"} alt="메인 배경이미지"/></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide2.jpg"} alt="메인 배경이미지"/></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide3.jpg"} alt="메인 배경이미지"/></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide4.jpg"} alt="메인 배경이미지"/></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide5.jpg"} alt="메인 배경이미지"/></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide6.jpg"} alt="메인 배경이미지"/></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide7.jpg"} alt="메인 배경이미지"/></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide8.jpg"} alt="메인 배경이미지"/></SwiperSlide>
    </Swiper>
    <div className="displaynone swiper-pager">
      <span className="swiper-prev">left</span>
      <span className="swiper-next">right</span>
    </div>

    </>
  );
};

export default Today;