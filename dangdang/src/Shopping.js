import React from 'react';

import './Shopping.css';

import Navwrap from './components/Navwrap.jsx';
import Main from './page/Main.jsx';
import Detail from './page/Detail.jsx';
import { Routes, Route } from "react-router-dom"; // Route 경로설정
import Best from "./page/Best.jsx";
import New from "./page/New.jsx";

import Test1 from "./page/Test1.jsx";
import Test2 from "./page/Test2.jsx";
import Cart from "./page/Cart.jsx";
import Not from "./page/Not.jsx";

import data from './data.js';
import { createContext, useState } from 'react';
const DataContext = createContext();

const Shopping = () => {
  let [shopping] = useState(data);
  return(
    <>
      <DataContext.Provider value={{shopping}}>
        <Navwrap/>
        <Routes>
          <Route path="/" element={<Main/>}/> {/* path경로 element보여줄것 */}
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/best" element={<Best/>}/>
          <Route path="/new" element={<New/>}>
            <Route path="test1" element={<Test1/>}/>
            <Route path="test2" element={<Test2/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Not/>}/>
        </Routes>
      </DataContext.Provider>
    </>
  )
};

export default Shopping;
export { DataContext };