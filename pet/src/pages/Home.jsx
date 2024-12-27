import React from 'react';
import MainSliderControls from '../components/MainSliderControls';

import MainSlider from '../components/MainSlider';
import BestItem from '../components/BestItem';
import NewItem from '../components/NewItem';
import Location from '../components/Location';

const Home = () => {
  return (
    <>
      <main className="main">
        <MainSlider/>
        <BestItem/>
        <NewItem/>
        <Location/>
      </main>
    </>
  );
};

export default Home;