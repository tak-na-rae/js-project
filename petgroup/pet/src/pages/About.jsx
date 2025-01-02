
import React, { useContext } from 'react';

import { useParams } from 'react-router-dom';
import { DataContext } from '../App';

import "./About.scss";

import Tab from '../components/Tab';
import TabData from "../data/tab.json";

const About = () => {
  const { id } = useParams();
  const { petData } = useContext(DataContext);
  const listData = TabData.filter((list) => list.category === "dog" || list.category === "cat");
  const tabLabels = [
    {label: "dog", value: "dog"},
    {label: "cat", value: "cat"}
  ]

  return (
    <>
      <section className="about">
        <div className="layout-fix">
          <div className="prd__detail">
            <div className="prd-info">
              <div className="image">
                <img src={process.env.PUBLIC_URL + petData[id].img} alt={petData[id].title}/>
              </div>
              <h2>{petData[id].title}</h2>
              <h3>{petData[id].price}</h3>
            </div>
            <Tab tabs={tabLabels} tabData={listData}/>
          </div>       
        </div>
      </section>
    </>
  );
};

export default About;