import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Product.scss";

import axios from "axios";

import { LuCat } from "react-icons/lu";

const Product = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    let url = "http://localhost:8080/products";
    axios.get(url)
    .then((result)=> {
      const products = result.data.products;
      setProducts(products);
    } )
    .catch((err)=> console.log(err) )
  })

  const navigate = useNavigate();
/*   axios.get("http://localhost:3000/products")
  .then((res)=>{ console.log(res) })
  .catch((err)=>{ console.log(err) }) */

  return (
    <>
      <section className="prd">
        <div className="layout-fix">
          <div className="heading">
            <h2>Product Upload</h2>
            <button className="btn-upload" onClick={()=> navigate('/upload') }>업로드하기</button>
            <ul className="prd-list">
              {
                products.map((el)=> (
                  <li key={el.id}>
                    <div className="prd-card">
                      <Link to={`detail/${el.id}`}>
                        <div className="img">
                          <img src={process.env.PUBLIC_URL + el.imgUrl} alt={el.name}/>
                        </div>
                        <div className="count">
                          <div className="name">{el.name}</div>
                          <div className="price">{el.price}</div>
                          <div className="seller"><LuCat/><em>{el.seller}</em></div>
                        </div>
                      </Link>
                    </div>
                  </li>
                ) )
              }
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;