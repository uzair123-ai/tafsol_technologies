import React from 'react'
import NavBar from './components/NavBar';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
// import Section4 from './components/Section4';
// import Section5 from './components/Section5';

const Home = () => {
  return (
    <>
      <div className='img'>
        <NavBar title ={"Tafsol Technologies"}/>
        <Section2 />
        <Section3 />
      </div>
      {/* <Section4 /> */}
      {/* <Section5 /> */}
    </>
  );
};

export default Home;