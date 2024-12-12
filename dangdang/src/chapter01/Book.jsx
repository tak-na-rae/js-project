// rsc
import React from 'react';

const Book = (props) => {
  // console.log("Book.jsx===",props);
  return (
    <>
      <h1>{ `이 책의 저자는 ${props.name} 입니다` }</h1>
      <h2>{ `이 책의 ${props.numOfPage} 페이지로 이루어져 있습니다` }</h2>
    </>
  );
};

export default Book;

