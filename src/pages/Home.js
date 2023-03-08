import React from 'react'
import '../assets/style/home.css'
import requests from '../requests';
import Row from '../components/Row';
import Hero from '../components/Hero';

function Home() {
  return (
    <div className='home'>
     {/* <Nav/> */}
      {/* banner start */}
      <Hero fetchurl={requests.trending}/>
      {/* banner end */}
      <Row title='Trending' fetchurl={requests.trending} gyroVal={['Today', 'This Week']} />
      <Row title='Top Rated' fetchurl={requests.topRated} gyroVal={['Movie', 'TV']}/>
      <Row title='Discovery' fetchurl={requests.discover} gyroVal={['Movie', 'TV']}/>
    </div>
  )
}

export default Home