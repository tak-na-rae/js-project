import React from 'react';

import { useState, useEffect, useRef } from "react";
import data from "../data/data.js";

import { Controller , Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const MainSliderControls = () => {
  const [swiper,setSwiper] = useState(null); //slide
  const [swiperIdx,setSwiperIdx] = useState(0); //pagination
  const [swiperText,setSwiperText] = useState(null); //text
  const [swiperTextIdx,setSwiperTextIdx] = useState(0); //text
  const [bg,setBg] = useState(); //bg

  const swiperRef = useRef(null);
  const [isAutoPause,setIsAutoPause] = useState(false); //autoplay 제어
  const [isActive,setIsActive] = useState(false); //active button


  //swiper 동기화
  const swiper1Ref = useRef();
  const swiper2Ref = useRef();
  useEffect(() => {
    swiper1Ref.current.controller.control = swiper2Ref.current;
    swiper2Ref.current.controller.control = swiper1Ref.current;
  }, []);


  return (
    <div className={`mySwiper mainslider`} style={{background:bg}}>
       <div className="contents">
       <Swiper
       // install Swiper modules
       modules={[Controller, Navigation, Pagination, Autoplay]}
       spaceBetween={0}
       slidesPerView={1}
       speed={1500}
       autoplay={
          {
             delay: 3000,
             disableOnInteraction: false,
          }
       }
       loop
       onSwiper={(swiper) => {swiper1Ref.current = swiper; setSwiperText(swiper);}}
       onActiveIndexChange={(e) => {
        setSwiperIdx(e.realIndex);
       }}
       className='textSlide'
       >
          {
             data.map((item) => (
                <SwiperSlide key={item.id}>
                   <div className="overlay-text">
                      <em>{item.badge}</em>
                      <p>{item.title}</p>
                      <a href={item.link}>자세히 보기</a>
                   </div>
                </SwiperSlide>
             ))
          }
       </Swiper> 
       </div>
       <div className="images">
          <Swiper
          modules={[Controller, Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          speed={1500}
          slidesPerView="auto"
          autoplay={
             {
                delay:3000,
                disableOnInteraction: false,
             }
          }
          loop={true}
          onSwiper={(swiper) => {swiper2Ref.current = swiper; setSwiper(swiper);}}
          onActiveIndexChange={(e) => setSwiperIdx(e.realIndex)}
          onSlideChange={(e) => {
            // bg
             const realIndex=e.realIndex;
             const bgColors = ["rgb(193, 230, 218)", "rgb(254, 255, 227)", "rgb(255, 231, 209)"]; //["#c1e6da", "#feffe3", "#ffe7d1"]
             setBg(bgColors[realIndex]);

            // progress bar
             const progressBar = document.querySelector(".fill");
             const progressWidth = ((realIndex + 1) / data.length * 100);
             if(realIndex === 0 && e.activeIndex !== 0){
              progressBar.style.transition = "none";
              progressBar.style.width = "0%";
              
              setTimeout(()=>{
                progressBar.style.transition = "width 1s";
              },50)
              if(e.activeIndex !== 0){ progressBar.style.width = `${progressWidth}%`; }
            } else {
              progressBar.style.width = `${progressWidth}%`;
             }
             setSwiperIdx(realIndex);
          }}
          onReachEnd={()=>{
            document.querySelector(".fill").style.width = `0%`;
            setSwiperIdx(0);
          }}
          className='mainSwiper'
          >
             {
                data.map((item) =>(
                   <SwiperSlide key={item.id}><img src={process.env.PUBLIC_URL + item.img} alt={item.textT} /></SwiperSlide>
                ))
             }
          </Swiper>
       </div>
       <div className="page">
          <div className="page">
             <div className="swiper_progress_bar">
                <div className='slider-bar'>
                   <div className="fill"></div>
                </div>
             </div>
             <div className="swiper-pagination">
                <span>0{swiperIdx+1}</span>
                <span> / </span>
                <span>0{data.length}</span>
             </div>
             <div className="swiper_btn">
                <div className="swiperPrevBtn">prev</div>
                <div className="btn-auto">
                   <div className="btn-stop">stop</div>
                </div>
                <div className="swiperNextBtn">next</div>
             </div>
          </div>
       </div>
    </div>
 );
};

export default MainSliderControls;