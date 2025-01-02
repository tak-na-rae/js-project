import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Product.scss";

import axios from "axios";

import { LuCat } from "react-icons/lu";

const Product = () => {
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
              <li>
                <div className="prd-card">
                  <Link to="/">
                    <div className="img">
                      <img src={process.env.PUBLIC_URL + "img/cat01.jpg"}/>
                    </div>
                    <div className="count">
                      <div className="name">고양이 사료</div>
                      <div className="price">32,000원</div>
                      <div className="seller"><LuCat/><em>캣컵</em></div>
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className="prd-card">
                  <Link to="/">
                    <div className="img">
                      <img src={process.env.PUBLIC_URL + "img/cat02.jpg"}/>
                    </div>
                    <div className="count">
                      <div className="name">고양이 사료</div>
                      <div className="price">32,000원</div>
                      <div className="seller"><LuCat/><em>캣컵</em></div>
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className="prd-card">
                  <Link to="/">
                    <div className="img">
                      <img src={process.env.PUBLIC_URL + "img/cat03.jpg"}/>
                    </div>
                    <div className="count">
                      <div className="name">고양이 사료</div>
                      <div className="price">32,000원</div>
                      <div className="seller"><LuCat/><em>캣컵</em></div>
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className="prd-card">
                  <Link to="/">
                    <div className="img">
                      <img src={process.env.PUBLIC_URL + "img/cat04.jpg"}/>
                    </div>
                    <div className="count">
                      <div className="name">고양이 사료</div>
                      <div className="price">32,000원</div>
                      <div className="seller"><LuCat/><em>캣컵</em></div>
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;