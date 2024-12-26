import React from 'react';

import { useState, useMemo } from "react";

const Memo = () => {
  // useMemo, useCallback : 동일한 값을 반복적으로 나타내야 할 때, 맨 처음 값을 메모리에 저장
  // const name = useMemo(()=>{},[])


  const [number,setNumber] = useState(1);
  const hard = (num)=>{
    for(let i = 0; i < 999999999; i++){
      return num + 1000
    }
  }
  const hardSum = hard(number);

  return (
    <>
    <div className="app-sum">
      <h2>어려운 계산기</h2>
      <input type="number" value={number} onChange={(e)=> setNumber(parseInt(e.target.value)) }/>
      <span>+ 1000 = {hardSum}</span>
    </div>
    </>
  );
};

export default Memo;