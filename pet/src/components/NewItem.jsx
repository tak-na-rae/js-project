import React from 'react';

import { Link } from 'react-router-dom';

import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./NewItem.scss";
import dataFresh from "../data/fresh.js"
console.log(dataFresh);


const NewItem = () => {
  return (
    <>
      <section className="NewItem">
        <div className="layout-fix">
          <div className="heading">
            <h2>New Item</h2>
            <p>We save you serious time</p>
          </div>
          <ul className="new-list">
              <Swiper className="swiper-fresh"
                  modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                  loop={true}
                  grabCursor={true}
                  autoplay={{
                    delay: 2000,
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
                    { dataFresh.map((el,idx) => (
                      <SwiperSlide key={idx}>
                        <Link to={`/about/${el.id}`}>
                          <div className="image">
                            <span className="num">{idx + 1}</span>
                            <img src={el.img} alt={el.title}/>
                          </div>
                          <div className="info">
                            <div className="title">{el.title}</div>
                            <div className="price">{el.price.toLocaleString(1)}원</div> 
                          </div>
                        </Link>
                      </SwiperSlide>
                    )) }
                </Swiper>
            </ul>
        </div>
      </section>
    </>
  );
};

export default NewItem;