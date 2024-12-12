import React from 'react';
import "./Detail.css";

import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from "../Shopping.js"

import { useEffect, useState } from 'react';

import { Link } from "react-router-dom"

import styled from "styled-components";
// let PurpleBtn = styled.button` width:100%; line-height:50px; background-color:#240c3c; font-size:15px; color:#fff; border:0; display:block; cursor:pointer; `;
let PropsBtn = styled.button` width:100%; line-height:50px; font-size:15px; border:0; cursor:pointer;
  background-color:${props => props.bg};
  color:${props => props.bg == "#240c3c" ? "#fff" : "#000"};
`;


const Detail = (props) => {
  let { id } = useParams();
  const { shopping } = useContext(DataContext);

  const formattedPrice = shopping[id].price.toLocaleString(); //,카운트

  // useEffect, useState
  let [count,setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  useEffect(()=>{
    let timer = setTimeout(()=>{
      setAlert(false);
      return() => {
        clearTimeout(timer);
      }
    }, 5000)
  }, [count])

  return (
    <>
      <div className="p-detail">
        <div className="layout-fix">
          {alert == true ? <div className="msg-discount">⏱ &nbsp;&nbsp;5초 깜짝 배너!</div> : null }

          <div className="flex-info">
            <div className="col">
                <img src={process.env.PUBLIC_URL + shopping[id].thumbs} alt={shopping[id].title}/>
              </div>
              <div className="row">
                <span className="cate">{shopping[id].category}</span>
                <h4 className="name">{shopping[id].title}</h4>
                <p className="desc">{shopping[id].description}</p>
                <p className="price">{formattedPrice}</p>
                
                <div className="btn-primary">
                  {/* <PurpleBtn>장바구니</PurpleBtn> */}
                  <Link to="/cart" className="PurpleBtn"><img src="./../img/icon_cart.png" alt="장바구니 버튼"/></Link>
                  <PropsBtn bg={"#240c3c"}>구매하기</PropsBtn>
                </div>
              </div>
          </div>

          {/* <button onClick={()=>{ setCount(count + 1) }}>버튼</button> */}

        </div> {/* .layout-fix */}
      </div> {/* .p-detail */}
    </>
  );
};

export default Detail;