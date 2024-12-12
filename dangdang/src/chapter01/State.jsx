import React, { useState } from 'react';

const State = () => {
  const [msg,setMsg] = useState('컬러확인');
  const onClickEnter = ()=> setMsg("(입장)안녕하세요");
  const [backgroundColor,setColor] = useState("#ccc");

  return (
    <>
      <div>
        <h1 style={{backgroundColor}}>{msg}</h1>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={ ()=>{setMsg("(퇴장)안녕히가세요")} }>퇴장</button>
      </div>
      <div>
        <button style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>빨강</button>
        <button style={{backgroundColor:"darkgreen"}} onClick={()=>{setColor("green")}}>초록</button>
        <button style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>파랑</button>
      </div>
    </>
  );
};

export default State;