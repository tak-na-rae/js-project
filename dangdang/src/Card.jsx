import React from 'react';
import { Link } from "react-router-dom";

const Card = (props) => {
  const formattedPrice = props.shopping.price.toLocaleString(); //,카운트
  return (
    <>
      <Link to={`/detail/${props.shopping.id}`} className="col">
        <img src={process.env.PUBLIC_URL + `/img/prd${props.i}.jpg`} alt={props.shopping.title}/>
        <h4 className="cate">{props.shopping.category}</h4>
        <h4 className="name">{props.shopping.title}</h4>
        <h4 className="price">{formattedPrice}</h4>
      </Link>
    </>
  );
};

export default Card;
