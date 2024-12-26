import './App.css';

import { useState } from "react";

function App() {
  const [time, setTime] = useState(1);
  const handleClick = ()=>{
    let newTime;
    if(time >= 12){
      newTime = 1;
    } else{
      newTime = time + 1;
    }
    setTime(newTime);
  }

  return (
    <> 
      <div className="app-time">
        <h2>{time}시</h2>
        <button onClick={()=>{ handleClick() }}>클릭</button>
      </div>
    </>
  );
}

export default App;
