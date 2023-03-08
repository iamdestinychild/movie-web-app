import React, {useState, useEffect} from 'react'
import Gyro from '../components/Gyro'
import '../assets/style/hero.css'
import banner from '../assets/images/banner.jpg'
import SearchFeald from './SearchFeald'

function Hero({ fetchurl }) {

  const baseUrl = "https://api.themoviedb.org/3/"

  // const imgPath = 'https://image.tmdb.org/t/p/w500'
  

  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}${fetchurl}`)
      const data = await response.json()
      let randMovie = Math.floor(Math.random() * (data.results.length - 1))
      setMovie(data.results[randMovie])
    }
    fetchData();
  }, [fetchurl])

 
  return (
  
    <div className='hero' style={
      {
        // backgroundImage: `url(${imgPath}${movie.backdrop_path})`
        backgroundImage: `url(${banner})`

      }
    }>
      
      <div className='hero_img_cover'></div>

      <div className='hero_intro'>
        
        <h1>Welcome.</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        
        {/* <Gyro springVal={['Movie', 'TV']} styleProp='gyro_filter' /> */}
        <SearchFeald title={movie? movie.title || movie.name || movie.original_title: 'loading...'} />
      </div>
        
    </div>
  )
}

export default Hero