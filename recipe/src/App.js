import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import RecipeDetail from './pages/RecipeDetail.jsx';
import Category from './pages/Category.jsx';

import axios from "axios";
import { useState, useEffect } from "react";

import { createContext } from 'react';
const DataContext = createContext();

function App( {children} ) { // https://www.foodsafetykorea.go.kr/api/newDatasetDetail.do
  const APIKEY = process.env.REACT_APP_API_KEY;

  const [loading,setLoading] = useState(true);
  const [data,setData] = useState([]);

  const getDB = async()=>{
    try {
      // const DB = await axios.get(`http://openapi.foodsafetykorea.go.kr/api/{API_KEY}/COOKRCP01/json/1/몇개`)
      const {data} = await axios.get(`https://openapi.foodsafetykorea.go.kr/api/${APIKEY}/COOKRCP01/json/1/20`);
      console.log(data.COOKRCP01.row);
      setData(data.COOKRCP01.row);
    } catch(err){ console.error(err); }
  }
  useEffect(()=>{
    getDB();
    setLoading(false);
  },[])

  return (
    <>
    <DataContext.Provider value={{ data,loading }}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/recipe/:id" element={<RecipeDetail/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
      </Routes>
    </DataContext.Provider>
    </>
  );
}

export default App;
export {DataContext};
