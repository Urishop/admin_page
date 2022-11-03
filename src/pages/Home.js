import React from 'react';
import Sidebar from '../component/Sidebar';
import './home.scss';
const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className='homeContainer '>container</div>
    </div>
  )
}

export default Home