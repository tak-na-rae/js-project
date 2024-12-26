import React from 'react';

import { useEffect, useRef } from 'react';

const Login = () => {
  const inputRef = useRef("");
  useEffect(()=>{
    console.log(inputRef)
    inputRef.current.focus();
  },[])

  const login = ()=>{
    alert(`환영합니다! ${inputRef.current.value}님`);
    inputRef.current.focus();
  }

  return (
    <>
      <div className="app-login">
        <input type="text" placeholder="이름" ref={inputRef}/>
        <button onClick={login}>로그인</button>
      </div>
    </>
  );
};

export default Login;