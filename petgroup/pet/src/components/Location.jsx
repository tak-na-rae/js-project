import React from 'react';

import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./Location.scss";
import location from "../data/location.js"
console.log(location);

const Location = () => {
  return (
    <>
      <section className="locationItem">
        <div className="layout-fix">
          <div className="heading">
            <h2>Location</h2>
          </div>
          <ul className="location-list">
              <Swiper className="swiper-fresh"
                  modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                  loop={true}
                  loopAdditionalSlides={1} //자연스럽게
                  speed={4000}

                  grabCursor={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={20} 
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  navigation={true}
                  breakpoints={{
                    767: {
                        slidesPerView: 4,
                        spaceBetween: 20
                      }
                   }}
                  >
                    { location.map((el,idx) => (
                      <SwiperSlide key={idx}>
                        <div className="image">
                          <img src={el.img} alt={el.title}/>
                        </div>
                        <div className="info">
                          <div className="title">{el.title}</div>
                          <div className="desc">{el.add}</div>
                        </div>
                      </SwiperSlide>
                    )) }
                </Swiper>
            </ul>
        </div>
      </section>
    </>
  );
};

export default Location;