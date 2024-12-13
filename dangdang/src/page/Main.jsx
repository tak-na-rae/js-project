import React, {useState} from 'react';

import bg from '../img/prd_bg.jpg';

import data from "../data.js";
import Card from '../Card.jsx';
import Today from '../components/Today.jsx';
import Footer from '../components/Footer.jsx';


const Main = () => {
  let [shopping] = useState(data);
  return (
    <>
      {/* <div className="main-bg">
          <img src={process.env.PUBLIC_URL + "/img/prd_bg.jpg"} alt="메인 배경이미지"/>
          <div className="main-bg" style={{background:`transparent url(${bg})no-repeat center/cover`}}></div>
          </div> */}
        <div className="p-shop">
          <div className="main-bg" style={{background:`transparent url(${bg})no-repeat center/cover`}}></div>
          <main>
            <div className="item-cont">
              <div className="heading">
                <p>시선집중! 지금 주목!</p>
                <h2>WEEKLY BEST</h2>
              </div>
              <div className="row">
                {/* <Card shopping={shopping[0]} i={1}/>
                <Card shopping={shopping[1]} i={2}/>
                <Card shopping={shopping[2]} i={3}/> */}

                {
                  shopping.map((item, idx)=>{
                    return(
                      <Card shopping={shopping[idx]} i={idx+1} key={idx}/>
                    )
                  })
                }
                

                {/* <div className="col">
                  <img src={process.env.PUBLIC_URL + "/img/prd1.jpg"} alt="상품이미지1"/>
                  <h4 className="cate">{shopping[0].category}</h4>
                  <h4 className="name">{shopping[0].title}</h4>
                  <h4 className="price">{shopping[0].price}</h4>
                </div>
                <div className="col">
                  <img src={process.env.PUBLIC_URL + "/img/prd2.jpg"} alt="상품이미지2"/>
                  <h4 className="cate">{shopping[1].category}</h4>
                  <h4 className="name">{shopping[1].title}</h4>
                  <h4 className="price">{shopping[1].price}</h4>
                </div>
                <div className="col">
                  <img src={process.env.PUBLIC_URL + "/img/prd3.jpg"} alt="상품이미지3"/>
                  <h4 className="cate">{shopping[2].category}</h4>
                  <h4 className="name">{shopping[2].title}</h4>
                  <h4 className="price">{shopping[2].price}</h4>
                </div> */}
              </div>
            </div>
            <div className="item-cont">
              <div className="today">
                <div className="layout-fix">
                  <div className="heading">
                    <p>안녕!</p>
                    <h2>WEEKLY NEW</h2>
                  </div>
                  <Today/>
                </div>
              </div>
            </div>
          </main>
          <Footer/>
        </div>

    </>
  );
};

export default Main;