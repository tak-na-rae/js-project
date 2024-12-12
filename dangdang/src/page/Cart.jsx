import React from 'react';
import { useSelector } from "react-redux";

import './../Cart.css';

const Cart = () => {
  let state = useSelector((state)=>{ return state; })
  console.log(state.cart);
  // console.log(state.cart[0].name);
  return (
    <>
      <div className="p-cart">
        <div className="layout-fix">
          <table className="tb-cart">
            <colgroup>
              <col style={{width:"80px"}}/>
              <col style={{width:"auto"}}/>
              <col style={{width:"80px"}}/>
              <col style={{width:"160px"}}/>
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>상품명</th>
                <th>수량</th>
                <th>금액</th>
                {/* <th>처리</th> */}
              </tr>
            </thead>
            <tbody>
              {
                state.cart.map((el, idx)=>
                  <tr key={idx}>
                    <td className="num">{state.cart[idx].id+1}</td>
                    <td className="name">{state.cart[idx].name}</td>
                    <td className="qty">
                      <button>-</button>
                      {state.cart[idx].count}
                      <button>+</button>
                    </td>
                    <td className="price">{state.cart[idx].price}</td> {/*.toLocaleString()*/}
                    {/* <td><button>+</button></td> */}
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
};

export default Cart;