import React, { useEffect, useState } from 'react'
import Poster from './Poster'
import Gyro from './Gyro'
import '../assets/style/row.css'


function Row({title, fetchurl, gyroVal}) {

    const baseUrl = "https://api.themoviedb.org/3/"

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const fetchData = async (url)=>{
            const response = await fetch(`${baseUrl}${url}`)
            const data = await response.json()
            setMovies(data.results)
            return data
        }
        fetchData(fetchurl)
    },[fetchurl])

  return (
    <div className='row'>
      <div className='row_title'>
      <h1>{title}</h1>
      <Gyro springVal={gyroVal} styleProp='rowstyle'/>
      </div>
    <div className='row_posters'>
    {movies ?movies.map(movie =>(
        
        <Poster key={movie.id} img={movie.poster_path}/>
        
    )
    ): <Poster lagging/>}
    </div>
    
    </div>
  )
}

export default Row