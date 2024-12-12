import React from 'react';

// const MyComponents = (props) => {
// 이름은 {props.name}, 나이는 {props.age} 입니다
const MyComponents = ( {name, age} ) => {
  return (
    <>
    이름은 {name}, 나이는 {age} 입니다
    
    </>
  );
};

export default MyComponents;