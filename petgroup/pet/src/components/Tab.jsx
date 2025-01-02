import React, { useState } from 'react';

import "./Tab.scss";

const Tab = ( {tabs,tabData} ) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }
  const filterData = tabData.filter((el)=> el.category === activeTab );

  return (
    <>
      <section className="about-tab">
        <div className="tab-menu">
          {
            tabs.map((el) => (
              <button key={el.value}
              className={activeTab == el.value ? "active" : ""}
              onClick={()=> handleTabClick(el.value) }
              >{el.label}</button>
            ))
          }
        </div>
        <ul className="tab-list">
          {
            filterData.map((el)=>(
              <li key={el.id}>
                <div className="cont">
                  {console.log(el.imgUrl)}
                  <img src={process.env.PUBLIC_URL + el.imgUrl} alt={el.category}/>
                  <p>{el.category}</p>
                  <p>{el.desc}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </>
  );
};

export default Tab;