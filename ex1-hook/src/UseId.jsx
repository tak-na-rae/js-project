import React, { useId } from 'react';

function UseId() {
  const id = useId(); // 고유 id생성
  console.log(id);
  
  return (
    <>
      <MyInput id={id}/> {/* 생성된 id를 MyInput에 전달 */}
    </>
  );
}

function MyInput({ id }) { //index.js 확인!!
  return (
    <>
      <div className="app-useid">
        <label htmlFor={`${id}-name`}>아이디</label>
        <input type="text" id={`${id}-name`} placeholder={`${id}-name`}/>
      </div>
      <div className="app-useid">
        <label htmlFor={`${id}-age`}>나이</label>
        <input type="text" id={`${id}-age`} placeholder={`${id}-age`}/>
      </div>
    </>
  );
};

export default UseId;