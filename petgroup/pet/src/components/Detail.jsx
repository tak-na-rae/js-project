import React, { useState,useEffect } from 'react';
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios';

import "./Detail.scss";

// Sequelize (sql)
// https://baeharam.netlify.app/posts/Node.js/Node.js-Sequelize-%EB%8B%A4%EB%A3%A8%EA%B8%B0

// (program) DB Browser for SQLite - .zip (no installer) for 64-bit Windows > DB Browser for SQLite 실행

const ProductList = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [product,setProduct] = useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:8080/detail/${id}`)
    .then((res)=>{
      setProduct(res.data);
      console.log(res.data);
    })
    .catch((err)=> console.log(err))
  },[id])

  return (
    <>
      <section className="product-detail">
        <div className="layout-fix">
          <button className="btn-back" onClick={()=>{ navigate(-1) }}>이전 페이지</button>
          <div className="prd-info">
            <span className="seller">{product.seller}</span>
            <h2>{product.name}</h2>
            <p className="price">{product.price}</p>
            <img src={product.imgUrl} alt={product.name}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;