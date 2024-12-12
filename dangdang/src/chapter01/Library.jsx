import React from 'react';
import Book from './Book';

const Library = (props) => {
  return (
    <>
    <Book name="리액트 처음 배우기" numOfPage={500} />
    <Book name="자바스크립트는 어려워" numOfPage={200} />
    </>
  );
};

export default Library;