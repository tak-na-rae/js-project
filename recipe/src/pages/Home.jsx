import React from 'react';

import { useState, useContext } from 'react';
import { DataContext } from '../App';

import { Link } from "react-router-dom";

const Home = () => {
  const {data,loading} = useContext(DataContext);
  return (
    <>
      <div className="p-main">
          { loading ? (
            <div className="loading">로딩중</div>
          ) : (
            <div className="layout-fix">
                <h2 className="heading-tit">조리식품의 레시피</h2>
                <ul className="recipe-list">
                  {data.map(el=>(
                    <li key={el.RCP_SEQ}>
                      <div className="cont">
                        <div className="img-scale">
                          <Link to={`/recipe/${el.RCP_SEQ}`}><img src={el.ATT_FILE_NO_MK} alt={el.RCP_NM}/></Link>
                        </div>
                        <span className="badge">{el.RCP_PAT2}</span>
                        <p className="name">{el.RCP_NM}</p>
                        {/* <p className="calorie">{el.INFO_ENG}kcal</p> */}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
          ) }
      </div>
    </>
  );
};

export default Home;