import React from 'react';

import { useState, useRef } from "react";
import data from "../data/data.js";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const MainSlider = () => {
  const [swiper,setSwiper] = useState(null); //slide
  const [swiperIdx,setSwiperIdx] = useState(0); //pagination
  const [swiperText,setSwiperText] = useState(null); //text
  const [swiperTextIdx,setSwiperTextIdx] = useState(0); //text
  const [bg,setBg] = useState(); //bg

  const  swiperRef= useRef(null);
   const [isAutoplayPaused, setIsAutoplayPaused] =useState(false); //제어버튼
   const [isActive, setIsActive]= useState(false) //active button

   const prev= () =>{
      swiper?.slidePrev();
      swiperText?.slidePrev();
   }
   const next= () =>{
      swiper?.slideNext();
      swiperText?.slideNext();
   }
   const autoPlayToggle= ()=>{
      if(swiper && swiper.autoplay && swiperText && swiperText.autoplay){
         if(swiper.autoplay.running && swiperText.autoplay.running){
          swiperText.autoplay.stop();
            swiper.autoplay.stop();
            setIsAutoplayPaused(true);
         }else{
          swiperText.autoplay.start();
            swiper.autoplay.start();
            setIsAutoplayPaused(false);
         }
      }

      setIsActive(!isActive);

   }

   return (
      <div className={`mainslider`} style={{background:bg}}>
         <div className="contents">
         <Swiper
         modules={[Navigation, Pagination, Autoplay]}
         spaceBetween={0}
         slidesPerView={1}
         touchRatio={0}
         speed={1000}
         autoplay={
            {
               delay: 3000,
               disableOnInteraction: false,
            }
         }
         loop
         onSwiper={(swiper) => {setSwiperText(swiper); swiperRef.current=swiper}}
         onActiveIndexChange={(e) => setSwiperIdx(e.realIndex)}
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
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            speed={1000}
            touchRatio={0}
            slidesPerView={'auto'}
            autoplay={
               {
                  delay:3000,
                  disableOnInteraction: false,
               }
            }
            loop={true}
            onSwiper={(swiper) => {setSwiper(swiper); swiperRef.current=swiper}}
            onActiveIndexChange={(e) => setSwiperIdx(e.realIndex)}
            onSlideChange={(e) => {
               const realIndex=e.realIndex;
               const bgColors = ["rgb(193, 230, 218)", "rgb(254, 255, 227)", "rgb(255, 231, 209)"]; //["#c1e6da", "#feffe3", "#ffe7d1"]
               setBg(bgColors[realIndex])
               const progressBar=document.querySelector('.fill')
               const progressWidth= ((realIndex+1)/data.length)*100;

               if(realIndex===0 && e.activeIndex !==0){
                  progressBar.style.transition='none';
                  progressBar.style.width='0%';

                  setTimeout(() => {
                     progressBar.style.transition='width .3s ease'
                  },50);
                  if(e.activeIndex !==0){
                     progressBar.style.transition='width .3s ease';
                     progressBar.style.width=`${progressWidth}%`;
                  }

               }else{
                  progressBar.style.width=`${progressWidth}%`;
               }

               

               setSwiperIdx(realIndex)

            }}
            /* onReachEnd={() =>{
               document.querySelector('.fill').style.width='0%';
               setSwiperIndex(0)
            }} */
            
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
               <div className="swiper_progress_bar">
                  <div className='slider-bar'>
                     <div className="fill"></div>
                  </div >
               </div>
               <div className="swiper-pagination">
                  <span>0{swiperIdx+1}</span>
                  <span> / </span>
                  <span>0{data.length}</span>
               </div>
               <div className="swiper-button">
                  <span className="btn-prev" onClick={prev}>prev</span>
                  <span className={`btn-stop ${isActive ? 'pause' : ''}`}  onClick={autoPlayToggle}>
                    { isActive ?  "재생":"정지" }
                  </span>
                  <span className="btn-next" onClick={next}>next</span>
                  
                  
               </div>
            </div>
         
      </div>
   );
};

export default MainSlider;