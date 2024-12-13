import React from 'react';
import MainComing from '../components/MainComing';
import Search from '../components/Search';

import { useState, useEffect } from 'react';
import axios from "axios";

const Home = () => {
  const [appMov,setAppMov] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getMovies = async()=>{
    try{
      const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko`);
      setAppMov(response.data.results);
      // setAppMov(response.data.results.slice(0, 8));
      console.log("Home.jsx==", response);
      setIsLoading(false);
    } catch(err){
      console.log("Error:", err)
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    getMovies();
  }, [])

  return (
    <>
      <div className="home">
        <MainComing/>
        <Search/>
        <div className="mainContainer">
          <div className="layout-fix">
            <h2>현재 상영작</h2>
            <div className="mainMovie">
              { isLoading ? (<p className="loding">로딩중</p>) : (
                  <div className="now">
                    <ul className="mov-list">
                      {appMov.map((el, idx)=>{
                        console.log(el)
                        return (
                            <li key={idx}>
                              <img src={`https://image.tmdb.org/t/p/w500/${el.backdrop_path}`}/>
                              <div className="tit">{el.title}</div>
                              <div className="tit-en">{el.original_title}</div>
                              <div className="vote">★ {el.vote_average.toFixed(1)}</div>
                            </li>
                          )
                      })}
                    </ul>
                  </div>
              ) }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;