import React from 'react';

import { useState } from "react";

const App1 = () => {
  const [name, setName] = useState(["나래","나나"]);
  const [input, setInput] = useState("");

  const InputChange = (e)=>{
    setInput(e.target.value);
    console.log("e==", e);
    console.log("value==", e.target.value);
  }

  const listAdd = ()=>{
    setName((prevState)=>{
      console.log("이전", prevState);
      return [input, ...prevState]
    })
  }

  return (
    <>
      <div className="app-add">
        <input type="text" value={input} onChange={InputChange}/>
        <button onClick={() => listAdd()}>추가</button>
        
        <ul className="name-list">
          {name.map((name, i)=>{
            return <li key={i}>{name}</li>
          } )}
        </ul>
      </div>
    </>
  );
};

export default App1;